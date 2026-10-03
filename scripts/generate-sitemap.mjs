// Writes public/sitemap.xml from the route list in scripts/routes.mjs.
// Every URL uses the trailing slash canonical form so it matches the page canonicals and
// the URL Netlify actually serves (it 301s the non slash form to the slash form).
import { writeFileSync } from 'fs';
import { execSync } from 'child_process';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { getRoutes, SITE_URL } from './routes.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

function lastmod() {
  try {
    const d = execSync('git log -1 --format=%cs -- src public', { cwd: ROOT, stdio: ['ignore', 'pipe', 'ignore'] })
      .toString()
      .trim();
    if (/^\d{4}-\d{2}-\d{2}$/.test(d)) return d;
  } catch {
    /* no git history available, fall through */
  }
  return new Date().toISOString().slice(0, 10);
}

const mod = lastmod();
const urls = getRoutes()
  .map((r) => `  <url>\n    <loc>${SITE_URL}${r}</loc>\n    <lastmod>${mod}</lastmod>\n  </url>`)
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
writeFileSync(join(ROOT, 'public', 'sitemap.xml'), xml, 'utf-8');
console.log(`sitemap.xml written: ${getRoutes().length} URLs, lastmod ${mod}`);
