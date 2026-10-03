// Single source of truth for URLs used in canonical tags, Open Graph, sitemap and JSON-LD.
//
// Netlify serves every prerendered route as /route/index.html and 301-redirects /route to
// /route/. The canonical URL for every page is therefore the TRAILING SLASH form. Declaring
// the non slash form as canonical (as the site used to) creates a canonical <-> redirect
// loop that stops Google from indexing the page.

export const SITE_URL = 'https://calibreassociates.com';
export const SITE_NAME = 'Calibre Associates';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og/calibre-associates-og.png`;
export const DEFAULT_OG_IMAGE_ALT =
  'Calibre Associates, digital marketing, web design, SEO and AI automation agency for India and the USA';
export const LOGO_URL = `${SITE_URL}/favicons/android-chrome-512x512.png`;

/** Normalizes an internal path to its canonical form: leading slash, trailing slash, no query or hash. */
export const toCanonicalPath = (path: string): string => {
  const clean = path.split('#')[0].split('?')[0].trim();
  const withLeading = clean.startsWith('/') ? clean : `/${clean}`;
  if (withLeading === '/') return '/';
  // Leave file-like paths alone (sitemap.xml, llms.txt, images).
  if (/\.[a-z0-9]{2,5}$/i.test(withLeading)) return withLeading;
  return withLeading.endsWith('/') ? withLeading : `${withLeading}/`;
};

/** Absolute canonical URL for an internal path. */
export const absUrl = (path: string): string => `${SITE_URL}${toCanonicalPath(path)}`;

/** Turns a possibly relative image path into an absolute URL. */
export const absImage = (src: string | undefined): string => {
  if (!src) return DEFAULT_OG_IMAGE;
  if (/^https?:\/\//i.test(src)) return src;
  return `${SITE_URL}${src.startsWith('/') ? '' : '/'}${src}`;
};

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: absUrl(item.path),
  })),
});

/** Cleans text for use as a meta description: no dashes, collapsed whitespace, trimmed on a word boundary. */
export const toMetaDescription = (text: string, max = 158): string => {
  const clean = text
    .replace(/\s*[–—]\s*/g, ', ')
    .replace(/\s+-\s+/g, ', ')
    .replace(/(\w)-(\w)/g, '$1 $2')
    .replace(/\s+/g, ' ')
    .trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  const lastSentence = Math.max(cut.lastIndexOf('. '), cut.lastIndexOf('! '));
  if (lastSentence > max * 0.6) return cut.slice(0, lastSentence + 1);
  return `${cut.slice(0, cut.lastIndexOf(' '))}.`;
};
