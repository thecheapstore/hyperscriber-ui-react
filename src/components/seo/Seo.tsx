import { Helmet } from 'react-helmet-async';
import { absImage, absUrl, DEFAULT_OG_IMAGE, DEFAULT_OG_IMAGE_ALT, SITE_NAME } from '@/lib/seo';

interface SeoProps {
  /** Full <title>. Keep it under about 60 characters, lead with the primary keyword, brand last. */
  title: string;
  /** Meta description, 140 to 160 characters, keyword rich and written as an answer. */
  description: string;
  /** Internal route path such as "/services/seo". The trailing slash canonical is derived from it. */
  path: string;
  image?: string;
  imageAlt?: string;
  type?: 'website' | 'article' | 'profile';
  noindex?: boolean;
  /** One or more JSON-LD objects rendered as separate script tags. */
  jsonLd?: object | object[];
  publishedTime?: string;
  modifiedTime?: string;
}

/**
 * The only place a page's head metadata is declared, so canonical, og:url, twitter tags and
 * JSON-LD always agree with the URL Netlify actually serves (trailing slash form).
 */
const Seo = ({
  title,
  description,
  path,
  image,
  imageAlt,
  type = 'website',
  noindex = false,
  jsonLd,
  publishedTime,
  modifiedTime,
}: SeoProps) => {
  const url = absUrl(path);
  const ogImage = image ? absImage(image) : DEFAULT_OG_IMAGE;
  const ogAlt = imageAlt ?? (image ? title : DEFAULT_OG_IMAGE_ALT);
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={ogAlt} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={ogAlt} />

      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default Seo;
