// Post-build prerendering step.
//
// This app is a fully client-rendered SPA (createRoot, no hydrateRoot), so the raw HTML
// served for every route is identical: an empty <div id="root"> with generic <head> tags.
// Non-JS-executing crawlers and most link-preview scrapers never see page-specific
// title/meta/content or JSON-LD. Real browsers still work exactly as before, since
// createRoot() replaces this static markup once React mounts, this just gives every
// known route a real, page-specific first paint instead of a blank shell.
//
// Approach: serve the built dist/ folder, drive a real headless Chromium to every route
// listed in the sitemap, capture the fully rendered document, and write it back into
// dist/ as that route's own index.html.

import puppeteer from 'puppeteer';
import { createServer } from 'http';
import { createReadStream, existsSync, statSync, mkdirSync, writeFileSync, readFileSync } from 'fs';
import { extname, join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { getRoutes, SITE_URL } from './routes.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DIST = join(ROOT, 'dist');
const PORT = 4174;

const MIME = {
  '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
  '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml', '.webp': 'image/webp',
  '.avif': 'image/avif', '.ico': 'image/x-icon', '.mp4': 'video/mp4',
  '.webmanifest': 'application/manifest+json', '.xml': 'application/xml',
  '.txt': 'text/plain',
};

function resolveStaticFile(reqPath) {
  let filePath = join(DIST, reqPath);

  // A path can already exist as a directory (a route prerendered on a prior run,
  // or any route requested without a trailing slash), not just be missing outright.
  const isDir = existsSync(filePath) && statSync(filePath).isDirectory();
  if (isDir || !existsSync(filePath) || reqPath.endsWith('/')) {
    filePath = join(filePath, 'index.html');
  }
  if (!existsSync(filePath) || statSync(filePath).isDirectory()) {
    // SPA fallback, mirrors the production _redirects rule.
    filePath = join(DIST, 'index.html');
  }
  return filePath;
}

function startStaticServer() {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      const reqPath = decodeURIComponent(req.url.split('?')[0]);
      const filePath = resolveStaticFile(reqPath);
      const ext = extname(filePath);
      res.setHeader('Content-Type', MIME[ext] || 'application/octet-stream');
      const stream = createReadStream(filePath);
      stream.on('error', (err) => {
        console.error(`Static server read error for ${reqPath} (${filePath}):`, err.message);
        if (!res.headersSent) res.writeHead(500);
        res.end();
      });
      stream.pipe(res);
    });
    server.listen(PORT, () => resolve(server));
  });
}

const NOT_FOUND_PROBE = '/this-page-does-not-exist-404/';
const CONCURRENCY = 1;

// Runs inside the page: collects everything the SEO QA needs from the rendered DOM.
function collectSeoFacts() {
  const meta = (sel) => document.querySelector(sel)?.getAttribute('content') || '';
  const jsonLd = [...document.querySelectorAll('script[type="application/ld+json"]')].map((n) => n.textContent || '');
  let jsonLdValid = true;
  for (const t of jsonLd) {
    try { JSON.parse(t); } catch (e) { jsonLdValid = false; }
  }
  const internalNoSlash = [...document.querySelectorAll('a[href^="/"]')]
    .map((a) => a.getAttribute('href'))
    .filter((h) => h && !h.startsWith('//') && !h.split(/[?#]/)[0].endsWith('/') && !/\.[a-z0-9]{2,5}$/i.test(h.split(/[?#]/)[0]));
  const canonicalEl = document.querySelector('link[rel="canonical"]');
  return {
    title: document.title,
    description: meta('meta[name="description"]'),
    canonical: canonicalEl ? canonicalEl.getAttribute('href') : '',
    robots: meta('meta[name="robots"]'),
    ogImage: meta('meta[property="og:image"]'),
    h1Count: document.querySelectorAll('h1').length,
    jsonLdCount: jsonLd.length,
    jsonLdValid,
    imgsMissingAlt: [...document.querySelectorAll('img')].filter((i) => !i.hasAttribute('alt')).length,
    internalNoSlash: [...new Set(internalNoSlash)].slice(0, 5),
    words: (document.body.innerText || '').split(/\s+/).filter(Boolean).length,
  };
}

async function prerenderRoute(browser, route) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });

  await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'networkidle0', timeout: 45000 });
  await page.waitForSelector('h1', { timeout: 10000 }).catch(() => {});

  // Give react-helmet-async rAF scheduled head update and any data driven
  // content a moment to settle after network idle.
  await new Promise((r) => setTimeout(r, 1200));

  const facts = await page.evaluate(collectSeoFacts);
  const html = await page.content();
  await page.close();

  return { html, facts };
}

function writeRoute(route, html) {
  const outDir = route === '/' ? DIST : join(DIST, route.replace(/^\//, ''));
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'index.html'), html, 'utf-8');
}

const DASH = /[–—]|\s-\s/;

// errors fail the build step, warnings are reported only.
function qa(route, f, seen) {
  const errors = [];
  const warnings = [];
  const expected = `${SITE_URL}${route}`;
  if (!f.title || f.title === 'Calibre Associates') errors.push('generic or missing title');
  if (f.canonical !== expected) errors.push(`canonical is "${f.canonical}", expected "${expected}"`);
  if (f.h1Count !== 1) errors.push(`${f.h1Count} H1 elements (need exactly 1)`);
  if (/noindex/i.test(f.robots)) errors.push('page is noindex');
  if (!f.jsonLdValid) errors.push('invalid JSON-LD');
  if (seen.titles.has(f.title)) errors.push(`duplicate title also used by ${seen.titles.get(f.title)}`);
  if (seen.descriptions.has(f.description)) errors.push(`duplicate description also used by ${seen.descriptions.get(f.description)}`);
  seen.titles.set(f.title, route);
  seen.descriptions.set(f.description, route);

  if (f.title.length < 30 || f.title.length > 66) warnings.push(`title length ${f.title.length}`);
  if (f.description.length < 120 || f.description.length > 165) warnings.push(`description length ${f.description.length}`);
  if (DASH.test(f.title) || DASH.test(f.description)) warnings.push('dash in title or description');
  if (f.imgsMissingAlt > 0) warnings.push(`${f.imgsMissingAlt} img without alt attribute`);
  if (f.internalNoSlash.length) warnings.push(`internal links without trailing slash: ${f.internalNoSlash.join(', ')}`);
  if (f.words < 250) warnings.push(`thin content (${f.words} words)`);
  return { errors, warnings };
}

async function main() {
  if (!existsSync(DIST)) {
    console.error('dist/ not found, run `vite build` first.');
    process.exit(1);
  }

  const routes = getRoutes();
  console.log(`Prerendering ${routes.length} routes (+ 404 page)...`);

  const server = await startStaticServer();
  // --no-sandbox is required in the Netlify build container: Chrome sandbox needs kernel
  // namespace privileges that CI containers do not grant, so without it puppeteer.launch()
  // throws immediately, this whole script exits non zero, and the `|| echo` fallback in the
  // package.json build script silently ships the plain un-prerendered SPA build instead.
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu', '--disable-renderer-backgrounding', '--disable-background-timer-throttling', '--disable-backgrounding-occluded-windows'],
  });

  const seen = { titles: new Map(), descriptions: new Map() };
  const results = new Map();
  let failures = 0;
  let warningCount = 0;
  const queue = [...routes];

  async function worker() {
    while (queue.length) {
      const route = queue.shift();
      try {
        const { html, facts } = await prerenderRoute(browser, route);
        writeRoute(route, html);
        results.set(route, { facts });
      } catch (err) {
        results.set(route, { error: err.message });
      }
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));

  // QA runs in route order so duplicate detection is deterministic.
  for (const route of routes) {
    const r = results.get(route);
    if (!r || r.error) {
      console.error(`FAIL ${route}  ->  ${r ? r.error : 'not rendered'}`);
      failures++;
      continue;
    }
    const { errors, warnings } = qa(route, r.facts, seen);
    console.log(`${errors.length ? 'FAIL' : 'ok  '} ${route}  ->  ${r.facts.title}`);
    errors.forEach((e) => console.error(`    ERROR   ${e}`));
    warnings.forEach((w) => console.warn(`    warning ${w}`));
    if (errors.length) failures++;
    warningCount += warnings.length;
  }

  // Real 404 page: render a path that matches no route and save it as dist/404.html.
  try {
    const { html, facts } = await prerenderRoute(browser, NOT_FOUND_PROBE);
    writeFileSync(join(DIST, '404.html'), html, 'utf-8');
    if (!/noindex/i.test(facts.robots)) {
      console.error('FAIL 404.html is missing noindex');
      failures++;
    } else {
      console.log('ok   404.html written (noindex)');
    }
  } catch (err) {
    console.error(`FAIL 404.html  ->  ${err.message}`);
    failures++;
  }

  await browser.close();
  server.close();

  console.log(`\nDone. ${routes.length - failures}/${routes.length} routes passed. ${warningCount} warning(s).`);
  if (failures > 0) {
    console.error(`${failures} problem(s) found, see ERROR lines above. Keeping the SPA fallback (200) in _redirects.`);
    process.exit(1);
  }

  // Everything rendered and passed QA: unknown URLs may now return a true 404 status instead
  // of a soft 404. Only done after a fully clean prerender, because if prerendering were
  // partial, a catch all 404 would turn real pages into 404s.
  const redirectsPath = join(DIST, '_redirects');
  if (existsSync(redirectsPath)) {
    const rules = readFileSync(redirectsPath, 'utf-8').replace(/^\/\*\s+\/index\.html\s+200\s*$/m, '/*    /404.html   404');
    writeFileSync(redirectsPath, rules, 'utf-8');
    console.log('dist/_redirects: unknown URLs now return a real 404 status.');
  }
}

main();
