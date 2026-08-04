export interface EditingVideo {
  id: string;
  title: string;
  category: string;
  description: string;
  videoUrl: string;
  thumbnailUrl?: string;
}

const videoModules = import.meta.glob('../../../assets/videos/video-editing/*.{mp4,webm,mov,MP4,WEBM,MOV}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const thumbnailModules = import.meta.glob(
  '../../../assets/videos/video-editing/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
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

/** Canonical display label for the page's known category tokens — keeps acronym casing (UGC, AI) correct. */
const CANONICAL_CATEGORIES: Record<string, string> = {
  ugc: 'UGC',
  realestate: 'Real Estate',
  healthcare: 'Healthcare',
  education: 'Education',
  aivideos: 'AI Videos',
  youtube: 'YouTube',
};

const normalizeCategory = (raw: string) => {
  const key = raw.toLowerCase().replace(/[-_\s]+/g, '');
  return CANONICAL_CATEGORIES[key] ?? humanize(raw);
};

/** Default one-line description per category — used unless a per-video override is provided below. */
const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  UGC: 'Authentic, native-feeling content built to convert.',
  'Real Estate': 'Cinematic property walkthroughs that sell the space.',
  Healthcare: 'Clear, trustworthy storytelling for patient-facing content.',
  Education: 'Structured, engaging edits built to teach and retain attention.',
  'AI Videos': 'AI-assisted production edited to a premium, human finish.',
  YouTube: 'Long-form storytelling paced to hold watch time.',
};

/** Per-video description overrides, keyed by base filename — optional, falls back to the category default. */
const DESCRIPTION_OVERRIDES: Record<string, string> = {};

const parseFilename = (baseName: string): { title: string; category: string } => {
  const [maybeCategory, ...rest] = baseName.split('__');
  if (rest.length > 0) {
    return { category: normalizeCategory(maybeCategory), title: humanize(rest.join('__')) };
  }
  return { category: 'YouTube', title: humanize(baseName) };
};

const thumbnailByBaseName = new Map<string, string>();
for (const path of Object.keys(thumbnailModules)) {
  thumbnailByBaseName.set(getBaseName(path), thumbnailModules[path]);
}

export const editingVideos: EditingVideo[] = Object.keys(videoModules)
  .sort()
  .map((path) => {
    const baseName = getBaseName(path);
    const { title, category } = parseFilename(baseName);
    return {
      id: baseName,
      title,
      category,
      description: DESCRIPTION_OVERRIDES[baseName] ?? CATEGORY_DESCRIPTIONS[category] ?? 'A recent project from our editing team.',
      videoUrl: videoModules[path],
      thumbnailUrl: thumbnailByBaseName.get(baseName),
    };
  });

export const EDITING_CATEGORY_ORDER = ['UGC', 'Real Estate', 'Healthcare', 'Education', 'AI Videos', 'YouTube'];
