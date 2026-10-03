import { forwardRef } from 'react';
import { Link as RouterLink, type LinkProps } from 'react-router-dom';
import { toCanonicalPath } from '@/lib/seo';

const normalize = (to: LinkProps['to']): LinkProps['to'] => {
  if (typeof to !== 'string') return to;
  if (!to.startsWith('/')) return to; // hash, mailto, relative, absolute URL: untouched
  const hashIndex = to.indexOf('#');
  const queryIndex = to.indexOf('?');
  const cut = [hashIndex, queryIndex].filter((i) => i >= 0).sort((a, b) => a - b)[0];
  const pathPart = cut === undefined ? to : to.slice(0, cut);
  const rest = cut === undefined ? '' : to.slice(cut);
  return `${toCanonicalPath(pathPart)}${rest}`;
};

/**
 * Drop in replacement for react-router's Link that always emits trailing slash hrefs, the
 * form Netlify serves and the canonical tags declare. Crawlers following internal links
 * then hit the final URL directly instead of a 301 hop.
 */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(({ to, ...rest }, ref) => (
  <RouterLink ref={ref} to={normalize(to)} {...rest} />
));
Link.displayName = 'Link';
