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

function getRoutesFromSitemap() {
  const sitemapPath = join(ROOT, 'public', 'sitemap.xml');
  const xml = readFileSync(sitemapPath, 'utf-8');
  const matches = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)];
  return matches.map((m) => {
    const url = new URL(m[1]);
    return url.pathname;
  });
}

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

async function prerenderRoute(browser, route) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });

  await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'networkidle0', timeout: 30000 });

  // Give react-helmet-async's rAF-scheduled head update and any data-driven
  // content a moment to settle after network idle.
  await new Promise((r) => setTimeout(r, 1200));

  const html = await page.content();
  await page.close();

  const outDir = route === '/' ? DIST : join(DIST, route.replace(/^\//, ''));
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'index.html'), html, 'utf-8');

  return html;
}

async function main() {
  if (!existsSync(DIST)) {
    console.error('dist/ not found, run `vite build` first.');
    process.exit(1);
  }

  const routes = getRoutesFromSitemap();
  console.log(`Prerendering ${routes.length} routes...`);

  const server = await startStaticServer();
  // --no-sandbox is required in Netlify's containerized build environment: Chrome's
  // sandbox needs kernel namespace privileges that CI containers don't grant, so without
  // it puppeteer.launch() throws immediately, this whole script exits non-zero, and the
  // `|| echo` fallback in package.json's build script silently ships the plain,
  // un-prerendered SPA build instead, no visible error, no failed deploy, nothing.
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
  });

  let failures = 0;
  for (const route of routes) {
    try {
      const html = await prerenderRoute(browser, route);
      const titleMatch = html.match(/<title>(.*?)<\/title>/);
      const title = titleMatch ? titleMatch[1] : '(no title found)';
      const isGeneric = title === 'Calibre Associates';
      console.log(`${isGeneric ? '⚠ ' : '✓ '}${route}  ->  ${title}`);
      if (isGeneric && route !== '/') failures++;
    } catch (err) {
      console.error(`✗ ${route}  ->  ${err.message}`);
      failures++;
    }
  }

  await browser.close();
  server.close();

  console.log(`\nDone. ${routes.length - failures}/${routes.length} routes rendered with page-specific content.`);
  if (failures > 0) {
    console.error(`${failures} route(s) still show generic/default content or failed, check above.`);
    process.exit(1);
  }
}

main();
