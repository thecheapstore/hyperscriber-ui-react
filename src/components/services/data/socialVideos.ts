export interface SocialVideo {
  id: string;
  title: string;
  category: string;
  videoUrl: string;
  thumbnailUrl?: string;
}

const videoModules = import.meta.glob('../../../assets/videos/social-media/*.{mp4,webm,mov,MP4,WEBM,MOV}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const thumbnailModules = import.meta.glob(
  '../../../assets/videos/social-media/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, query: '?url', import: 'default' }
) as Record<string, string>;

const getBaseName = (path: string) => {
  const fileName = path.split('/').pop() ?? path;
  return fileName.replace(/\.[^.]+$/, '');
};

const humanize = (slug: string) =>
  slug
    .replace(/[-_]+/g, ' ')
    .trim()
    .split(' ')
    .map((word) => (word.length > 0 ? word[0].toUpperCase() + word.slice(1) : word))
    .join(' ');

const parseFilename = (baseName: string): { title: string; category: string } => {
  const [maybeCategory, ...rest] = baseName.split('__');
  if (rest.length > 0) {
    return { category: humanize(maybeCategory), title: humanize(rest.join('__')) };
  }
  return { category: 'Social Media', title: humanize(baseName) };
};

const thumbnailByBaseName = new Map<string, string>();
for (const path of Object.keys(thumbnailModules)) {
  thumbnailByBaseName.set(getBaseName(path), thumbnailModules[path]);
}

export const socialVideos: SocialVideo[] = Object.keys(videoModules)
  .sort()
  .map((path) => {
    const baseName = getBaseName(path);
    const { title, category } = parseFilename(baseName);
    return {
      id: baseName,
      title,
      category,
      videoUrl: videoModules[path],
      thumbnailUrl: thumbnailByBaseName.get(baseName),
    };
  });
