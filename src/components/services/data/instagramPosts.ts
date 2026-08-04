export interface InstagramPost {
  id: string;
  url: string;
}

const POST_URLS = [
  'https://www.instagram.com/p/DbHQ9BslSLL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  'https://www.instagram.com/p/DaGmp_DzNEe/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  'https://www.instagram.com/p/DaEB3j8kwgo/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  'https://www.instagram.com/p/DZ5zP72z95M/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  'https://www.instagram.com/p/DZvYkOFoI5M/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  'https://www.instagram.com/p/DZspKDuBS9u/?utm_source=ig_web_copy_link',
  'https://www.instagram.com/p/DY0DPjjlCSk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  'https://www.instagram.com/p/DYSUGL2gUJi/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  'https://www.instagram.com/p/DYPOda9kkHW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  'https://www.instagram.com/p/DYNXyJTj4dp/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  'https://www.instagram.com/p/DYCfWcCF1D3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
];

const getShortcode = (url: string) => {
  const match = url.match(/\/p\/([^/]+)\//);
  return match ? match[1] : url;
};

export const instagramPosts: InstagramPost[] = POST_URLS.map((url) => ({
  id: getShortcode(url),
  url,
}));
