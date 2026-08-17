import type { Project } from './types';
import calibreMark from '@/assets/portfolio/brand-identity/calibre-mark.png';

const plumeImages = import.meta.glob('../../assets/portfolio/brand-identity/plume/*.jpg', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const voltaImages = import.meta.glob('../../assets/portfolio/brand-identity/volta/*.jpg', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const slickImages = import.meta.glob('../../assets/portfolio/brand-identity/slick/*.jpg', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const slickVideoFiles = import.meta.glob('../../assets/portfolio/brand-identity/slick/*.mp4', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const denimImages = import.meta.glob('../../assets/portfolio/brand-identity/denim/*.jpg', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const denimVideoFiles = import.meta.glob('../../assets/portfolio/brand-identity/denim/*.mp4', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const asset = (modules: Record<string, string>, filename: string): string => {
  const match = Object.entries(modules).find(([path]) => path.endsWith(`/${filename}`));
  if (!match) throw new Error(`Brand identity asset not found: ${filename}`);
  return match[1];
};

const plume = (name: string) => asset(plumeImages, name);
const volta = (name: string) => asset(voltaImages, name);
const slick = (name: string) => asset(slickImages, name);
const denim = (name: string) => asset(denimImages, name);

const plumeGallery = [
  { src: plume('01_hero.jpg'), alt: 'Plume Thickening Ritual Shampoo bottle with a coral lit water splash on an emerald background' },
  { src: plume('02_wetmodel.jpg'), alt: 'Model with wet hair laughing while holding the Plume bottle to her cheek' },
  { src: plume('03_hairflip.jpg'), alt: 'Model with hair caught mid flip, holding the Plume bottle' },
  { src: plume('04_lather.jpg'), alt: 'Macro shot of foaming lather with a rosemary sprig, close to the Plume bottle' },
  { src: plume('05_niche.jpg'), alt: 'Plume bottle staged in a tiled shower niche with soft light and steam' },
  { src: plume('06_ribbon.jpg'), alt: 'Water ribbon effect wrapping around the Plume bottle' },
  { src: plume('07_flatlay.jpg'), alt: 'Flat lay of the Plume bottle with rosemary, lime, and bath accessories' },
  { src: plume('08_plinth.jpg'), alt: 'Plume bottle staged on a stone plinth next to a lock of hair' },
  { src: plume('09_prompts.jpg'), alt: 'Campaign card promoting the AI product photography generation process behind Plume' },
  { src: plume('10_cta.jpg'), alt: 'Lead generation post inviting followers to comment for the Plume prompt guide' },
  { src: plume('_filmstrip.jpg'), alt: 'Full contact sheet of the Plume campaign photography set' },
];

const voltaGallery = [
  { src: volta('01_hero.jpg'), alt: 'Volta Sparkling Yuzu and Ginger can with a splash of water on a cobalt background' },
  { src: volta('02_model.jpg'), alt: 'Model holding the Volta can to her face with eyes closed' },
  { src: volta('03_macro.jpg'), alt: 'Macro close up of condensation droplets on the Volta can' },
  { src: volta('04_ice.jpg'), alt: 'Volta can frozen inside a block of ice, backlit in acid yellow' },
  { src: volta('05_flatlay.jpg'), alt: 'Flat lay of the Volta can with ginger, lemon, and mint on yellow tile' },
  { src: volta('06_chrome.jpg'), alt: 'Volta can reflected on a liquid chrome floor' },
  { src: volta('07_pool.jpg'), alt: 'Volta can staged poolside on blue tile with a pool float' },
  { src: volta('08_street.jpg'), alt: 'Man in a denim jacket carrying the Volta can on a city street' },
  { src: volta('09_prompts.jpg'), alt: 'Campaign card promoting the AI product photography generation process behind Volta' },
  { src: volta('10_cta.jpg'), alt: 'Lead generation post inviting followers to comment for the Volta prompt guide' },
  { src: volta('_filmstrip.jpg'), alt: 'Full contact sheet of the Volta campaign photography set' },
];

const slickGallery = [
  { src: slick('01_hero.jpg'), alt: 'Slick Hyper Gloss Shampoo bottle on an orange background with glass rods and chrome spheres' },
  { src: slick('02_wetmodel.jpg'), alt: 'Model with glossy dark hair holding the Slick bottle' },
  { src: slick('03_hairflip.jpg'), alt: 'Model laughing under running water while holding the Slick bottle' },
  { src: slick('04_lather.jpg'), alt: 'Macro shot of a chrome sphere swirling through lather for Slick' },
  { src: slick('05_niche.jpg'), alt: 'Slick bottle styled on a black and white checkerboard surface with rice and oil ingredients' },
  { src: slick('06_flatlay.jpg'), alt: 'Slick bottle on a checkerboard floor lit by a single hard light beam' },
  { src: slick('07_hand.jpg'), alt: 'Hands lathering Slick shampoo under running water' },
  { src: slick('08_bundle.jpg'), alt: 'Three bundled Slick bottles staged with glass rods and chrome spheres' },
  { src: slick('09_prompts.jpg'), alt: 'Campaign card promoting the AI product photography generation process behind Slick' },
  { src: slick('10_cta.jpg'), alt: 'Lead generation post inviting followers to comment for the Slick prompt guide' },
  { src: slick('_filmstrip.jpg'), alt: 'Full contact sheet of the Slick brand photography set' },
  { src: slick('_funnel_sheet.jpg'), alt: 'Funnel sheet mapping every Slick ad creative to its awareness, consideration, or conversion stage' },
  { src: slick('T1_hook_4x5.jpg'), alt: 'Top of funnel Slick ad: "Your hair isn\'t dull, it\'s thirsty" hook creative' },
  { src: slick('T2_shine_4x5.jpg'), alt: 'Top of funnel Slick ad built around a mirror shine hook' },
  { src: slick('T3_washday_4x5.jpg'), alt: 'Top of funnel Slick ad built around a wash day hook' },
  { src: slick('T4_slip_4x5.jpg'), alt: 'Top of funnel Slick ad built around the product\'s slip texture' },
  { src: slick('M1_inside_4x5.jpg'), alt: 'Middle of funnel Slick ad explaining what is inside the formula' },
  { src: slick('M2_builtfor_4x5.jpg'), alt: 'Middle of funnel Slick ad explaining who the product is built for' },
  { src: slick('M3_twopumps_4x5.jpg'), alt: 'Middle of funnel Slick ad explaining the two pump usage routine' },
  { src: slick('B1_bundle_4x5.jpg'), alt: 'Bottom of funnel Slick ad offering a buy two get one bundle deal' },
  { src: slick('B2_reviews_4x5.jpg'), alt: 'Bottom of funnel Slick ad built around a five star customer review' },
  { src: slick('B3_shopnow_4x5.jpg'), alt: 'Bottom of funnel Slick ad with a shop now call to action' },
];

const denimGallery = [
  { src: denim('reel_storyboard.jpg'), alt: 'Storyboard grid of the Denim Co-Ord campaign reel, one model in one outfit across every scene' },
];

export const brandIdentityProjects: Project[] = [
  {
    slug: 'plume',
    serviceSlug: 'brand-identity-development',
    companyName: 'Plume',
    projectName: 'Plume, Brand Identity Concept Campaign',
    shortDescription:
      'Plume is a concept haircare brand built in house to demonstrate a full brand identity, wordmark, packaging, and color system, paired with a ten shot AI generated photography campaign, produced without a physical product or a photoshoot.',
    category: 'Concept Brand Identity, Haircare',
    portfolioCategory: 'Brand Identity',
    platformTags: ['Brand Identity'],
    featured: true,
    isConcept: true,
    highlights: [
      'Brand Identity Design',
      'Packaging & Wordmark',
      'AI Campaign Photography',
      'Color System',
      'Art Direction',
      'Content Strategy',
    ],
    companyLogo: calibreMark,
    socialImage: plume('01_hero.jpg'),
    overview:
      'Plume is a concept haircare brand built entirely in house to show how far a brand identity and an AI generated photography campaign can carry each other, from a single bottle render into a full ten shot campaign. Calibre Associates designed the Plume wordmark, packaging label, and emerald and coral color system, then generated a complete photography set around it: hero shots, lifestyle portraits, texture close ups, and flat lays, all without a physical product, a studio, or a photoshoot.',
    about: {
      business: 'Concept Haircare Brand, In House Demo',
      industry: 'Beauty & Personal Care (Concept)',
      location: 'Produced by Calibre Associates',
    },
    goals: [
      'Prove a full brand identity and campaign can be built without a physical product or photoshoot',
      'Design a packaging label, wordmark, and color system that reads as a real retail brand',
      'Generate a cohesive photography set spanning hero, lifestyle, texture, and flat lay shots',
      'Show prospective clients what AI generated brand content can actually look like',
    ],
    challenge:
      'Most AI generated product photography looks obviously synthetic, inconsistent lighting, a warped label, or a product that looks different from shot to shot. The challenge was building a Plume identity precise enough, and a generation process disciplined enough, that the bottle stayed consistent across ten very different shots, splash photography, a model mid laugh, hair caught mid flip, and a macro lather shot, all reading as one coherent campaign rather than ten unrelated images.',
    strategy:
      'We treated this the same way we would treat a real client brand: define the identity first, packaging, wordmark, color system, and tone, then plan a shot list that a real campaign would actually need, hero, lifestyle, ingredient story, and call to action, before generating a single image.',
    solution:
      'Calibre Associates designed the Plume wordmark and packaging label, an emerald green bottle with a cream label and a coral accent, then built out a ten shot campaign: a hero splash shot, two lifestyle portraits with a model, a macro lather and rosemary shot, a shower niche shot, a water ribbon effect, an ingredient flat lay, and a plinth shot styled with a lock of hair, all generated to match the same product, lighting language, and color system throughout.',
    process: [],
    screenshots: {},
    features: [
      'Brand wordmark and packaging label design',
      'Emerald, cream, and coral color system',
      'Ten shot AI generated campaign photography set',
      'Consistent product rendering across every shot',
      'Lifestyle, macro, flat lay, and hero photography styles',
      'Full campaign contact sheet for review',
    ],
    designHighlights: [
      'Emerald green bottle with a cream label and coral rim light',
      'Rosemary and peptide complex packaging story',
      'Consistent hero lens language carried across every shot',
      'Water splash and ribbon effects used as a recurring visual motif',
    ],
    featuresSectionTitle: 'Campaign Deliverables',
    featuresSectionEyebrow: 'WHAT WE PRODUCED',
    businessImpactSummary:
      'As an in house concept, Plume is not a live product or a paying client. It exists to demonstrate what Calibre Associates can build, a complete brand identity and a full photography campaign, generated without a physical shoot, ready to show prospective clients exactly what is possible.',
    businessImpact: [
      'Demonstrates full brand identity design, from wordmark to packaging',
      'Shows a ten shot campaign generated without a physical product or studio',
      'Proves consistent AI product rendering across varied shot types',
      'Used as a live example when scoping brand identity work with new clients',
    ],
    results: [{ label: 'Campaign Visuals Produced', value: 11 }],
    gallery: plumeGallery,
    finalCtaHeadline: 'Want a Campaign Like This for a Real Product?',
    finalCtaDescription:
      "Book a free consultation and we'll show you how a full brand identity and campaign could come together for your business.",
  },
  {
    slug: 'volta',
    serviceSlug: 'brand-identity-development',
    companyName: 'Volta',
    projectName: 'Volta, Brand Identity Concept Campaign',
    shortDescription:
      'Volta is a concept sparkling drink brand built in house to demonstrate a full can based brand identity and lifestyle photography campaign, cobalt blue and acid yellow, generated end to end without a physical product or a photoshoot.',
    category: 'Concept Brand Identity, Beverage',
    portfolioCategory: 'Brand Identity',
    platformTags: ['Brand Identity'],
    featured: true,
    isConcept: true,
    highlights: [
      'Brand Identity Design',
      'Packaging & Wordmark',
      'AI Campaign Photography',
      'Color System',
      'Art Direction',
      'Lifestyle Content',
    ],
    companyLogo: calibreMark,
    socialImage: volta('01_hero.jpg'),
    overview:
      'Volta is a concept sparkling drink brand built entirely in house to show what a full can based brand identity and lifestyle campaign can look like when generated end to end. Calibre Associates designed the Volta wordmark and can graphics, then generated a ten shot campaign ranging from studio hero photography to real world feeling lifestyle scenes, all without a physical can, a studio, or a photoshoot.',
    about: {
      business: 'Concept Beverage Brand, In House Demo',
      industry: 'Food & Beverage (Concept)',
      location: 'Produced by Calibre Associates',
    },
    goals: [
      'Prove a full can based brand identity can be built without a physical product',
      'Design a wordmark and color system distinct enough to read as a shelf ready beverage brand',
      'Generate a lifestyle campaign spanning studio, macro, outdoor, and street photography',
      'Show prospective clients what a beverage brand launch could look like before a single can is printed',
    ],
    challenge:
      'Beverage photography lives or dies on condensation, reflection, and a sense of temperature, all details that are easy for AI generation to get wrong. The challenge was keeping the Volta can, its cobalt blue body and acid yellow wordmark, identical across a studio splash shot, a frozen ice block shot, a pool deck lifestyle shot, and a street style portrait, while making every shot still look convincingly cold.',
    strategy:
      'We built the identity first, a cobalt and acid yellow color system built to stand out against both a dark studio background and a bright outdoor scene, then planned a shot list that moved from studio hero photography into real world lifestyle contexts, the kind of range a beverage brand actually needs across its own channels and retail partners.',
    solution:
      'Calibre Associates designed the Volta wordmark and can graphics, sparkling yuzu and ginger in a cobalt can with an acid yellow wordmark and rim light, then generated a full campaign: a hero splash shot, a portrait with a model holding the can to her face, a macro condensation shot, the can frozen inside a block of ice, a ginger and citrus ingredient flat lay, a chrome reflection shot, a poolside lifestyle shot, and a street style portrait, all sharing the same can, lighting language, and color system.',
    process: [],
    screenshots: {},
    features: [
      'Brand wordmark and can graphic design',
      'Cobalt blue and acid yellow color system',
      'Ten shot AI generated campaign photography set',
      'Consistent can rendering across studio, macro, and outdoor shots',
      'Studio, lifestyle, macro, and street photography styles',
      'Full campaign contact sheet for review',
    ],
    designHighlights: [
      'Cobalt blue can with an acid yellow wordmark and rim light',
      'Sparkling yuzu and ginger flavor story',
      'Consistent frozen water crown motif carried across studio shots',
      'Range from studio to street: pool deck, city sidewalk, and macro condensation shots',
    ],
    featuresSectionTitle: 'Campaign Deliverables',
    featuresSectionEyebrow: 'WHAT WE PRODUCED',
    businessImpactSummary:
      'As an in house concept, Volta is not a live product or a paying client. It exists to demonstrate a full beverage brand identity and lifestyle campaign, generated end to end, ready to show prospective clients what a launch ready campaign could look like before a single can is printed.',
    businessImpact: [
      'Demonstrates full can based brand identity design',
      'Shows range across studio, macro, and real world lifestyle photography',
      'Proves consistent AI can rendering across ten very different shots',
      'Used as a live example when scoping beverage and CPG brand work',
    ],
    results: [{ label: 'Campaign Visuals Produced', value: 11 }],
    gallery: voltaGallery,
    finalCtaHeadline: 'Launching a Product and Need the Visuals First?',
    finalCtaDescription:
      "Book a free consultation and we'll show you how a full brand identity and campaign could come together before a single unit ships.",
  },
  {
    slug: 'slick',
    serviceSlug: 'brand-identity-development',
    companyName: 'Slick',
    projectName: 'Slick, Brand Identity & Full Funnel Campaign',
    shortDescription:
      'Slick is a concept haircare brand built in house to demonstrate a complete brand identity paired with a full paid social funnel, awareness, consideration, and conversion creative plus a short form video reel, generated end to end without a physical product or a photoshoot.',
    category: 'Concept Brand Identity & Paid Social Funnel',
    portfolioCategory: 'Brand Identity',
    platformTags: ['Brand Identity'],
    featured: true,
    isConcept: true,
    highlights: [
      'Brand Identity Design',
      'Full Funnel Ad Creative',
      'AI Campaign Photography',
      'Short Form Video Reel',
      'Copywriting & Messaging',
      'Multi Format Creative',
    ],
    companyLogo: calibreMark,
    socialImage: slick('01_hero.jpg'),
    overview:
      'Slick is a concept haircare brand built entirely in house to show what a complete paid social system looks like when the brand identity and the full funnel creative are planned together from day one. Calibre Associates designed the Slick identity, then generated a full funnel campaign, awareness, consideration, and conversion creative across three ad formats, plus a cut, ready to post video reel, all without a physical product, a studio, or a photoshoot.',
    about: {
      business: 'Concept Haircare Brand, In House Demo',
      industry: 'Beauty & Personal Care (Concept)',
      location: 'Produced by Calibre Associates',
    },
    goals: [
      'Prove a complete brand identity can carry a full paid social funnel',
      'Build distinct creative for awareness, consideration, and conversion stages',
      'Produce a short form video reel alongside static campaign photography',
      'Show prospective clients what a launch ready paid social campaign looks like end to end',
    ],
    challenge:
      'A real paid social campaign needs more than one striking hero shot. It needs a top of funnel hook that stops the scroll, middle of funnel creative that explains the product, and bottom of funnel creative that actually closes the sale, plus a video reel, all while keeping the product and brand voice identical across dozens of assets and multiple aspect ratios for every placement.',
    strategy:
      'We built Slick around a full funnel from the start rather than a single campaign concept: a bold black and lime identity with a checkerboard motif designed to stop the scroll, then a defined creative brief for each funnel stage, hook driven awareness creative, product education for consideration, and offer driven creative for conversion, planned before a single image was generated.',
    solution:
      'Calibre Associates designed the Slick wordmark, checkerboard packaging system, and black and lime color palette, then built a full funnel campaign: a ten shot brand carousel covering hero, lifestyle, and ingredient photography, a top of funnel set built around hooks like "your hair isn\'t dull" and "mirror shine", a middle of funnel set explaining the rice water protein and slip oil formula, a bottom of funnel set built around bundle offers and reviews, and a vertical video reel cut for Stories and Reels placements, all generated to match the same product, palette, and voice throughout.',
    process: [],
    screenshots: {},
    features: [
      'Brand wordmark, checkerboard motif, and packaging design',
      'Black and lime color system',
      'Ten shot brand carousel: hero, lifestyle, macro, and flat lay photography',
      'Top of funnel awareness creative built around scroll stopping hooks',
      'Middle of funnel creative explaining the product formula',
      'Bottom of funnel creative built around offers and reviews',
      'Vertical video reel cut for Stories and Reels placements',
      'Full funnel sheet mapping every asset to its stage and objective',
    ],
    designHighlights: [
      'Black and lime checkerboard identity built to stop the scroll',
      'Rice water protein and slip oil formula story',
      'A distinct headline system per funnel stage: hooks, education, and offers',
      'Consistent bottle rendering held across twenty plus generated shots',
    ],
    featuresSectionTitle: 'Campaign Deliverables',
    featuresSectionEyebrow: 'WHAT WE PRODUCED',
    businessImpactSummary:
      'As an in house concept, Slick is not a live product or a paying client. It exists to demonstrate a complete paid social system, brand identity, full funnel creative, and a video reel, generated end to end, ready to show prospective clients what a launch ready campaign actually requires.',
    businessImpact: [
      'Demonstrates a complete brand identity paired with a full paid social funnel',
      'Shows distinct creative built for awareness, consideration, and conversion stages',
      'Proves consistent product rendering across twenty plus generated assets',
      'Includes a cut, ready to post vertical video reel',
      'Used as a live example when scoping full funnel campaign work',
    ],
    results: [
      { label: 'Campaign Assets Generated', value: 22 },
      { label: 'Funnel Stages Covered', value: 3 },
    ],
    gallery: slickGallery,
    video: {
      src: asset(slickVideoFiles, 'SLICK_reel_TOFU_9x16.mp4'),
      poster: slick('reel_storyboard.jpg'),
      label: 'Vertical Video Reel, Top of Funnel Cut',
    },
    finalCtaHeadline: 'Need a Full Funnel Campaign, Not Just a Photo?',
    finalCtaDescription:
      "Book a free consultation and we'll map out the identity, the funnel, and the content needed to actually launch.",
  },
  {
    slug: 'denim',
    serviceSlug: 'brand-identity-development',
    companyName: 'The Denim Co-Ord',
    projectName: 'The Denim Co-Ord, AI Fashion Campaign',
    shortDescription:
      'A concept fashion campaign built in house to demonstrate a virtual photoshoot: one consistent AI generated model in a single denim co-ord outfit, placed across multiple location styled scenes for a full campaign, catalogue, and ad set, produced without an actual photoshoot or travel.',
    category: 'Concept Fashion Campaign, Virtual Photoshoot',
    portfolioCategory: 'Brand Identity',
    platformTags: ['Brand Identity'],
    featured: false,
    isConcept: true,
    highlights: [
      'AI Fashion Photography',
      'Model Consistency',
      'Virtual Photoshoot',
      'Short Form Video Reel',
      'Art Direction',
    ],
    companyLogo: calibreMark,
    socialImage: denim('reel_storyboard.jpg'),
    overview:
      'This concept campaign was built to demonstrate a virtual photoshoot: a single consistent AI generated model styled in one denim co-ord, moved through a sequence of location styled scenes for a full campaign, catalogue, and ad set, all produced without an actual photoshoot, a studio day, or travel.',
    about: {
      business: 'Concept Fashion Campaign, In House Demo',
      industry: 'Fashion & Apparel (Concept)',
      location: 'Produced by Calibre Associates',
    },
    goals: [
      'Prove a consistent virtual model can carry a full fashion campaign across locations',
      'Demonstrate campaign, catalogue, and ad ready content without an actual photoshoot',
      'Show how quickly a full look sequence can be produced compared to a real shoot',
      'Package the result as a short form video reel ready to post',
    ],
    challenge:
      'The hardest part of AI generated fashion content is consistency, the same model, the same outfit, the same lighting logic, across shots that are supposed to have been taken in completely different locations on the same day. Most AI fashion generation drifts, the model\'s face changes, the denim shifts tone, the proportions shift shot to shot. The goal was a single model and a single denim co-ord that stayed recognizably consistent across a full location spanning sequence.',
    strategy:
      'Rather than generating one hero shot, we planned this the way a real photoshoot would be planned, one outfit, one model, a defined set of locations and angles, then generated the full sequence to hold that consistency, treating it as a location shoot compressed into a single generation pass instead of an actual flight to shoot on location.',
    solution:
      'Calibre Associates generated a full campaign sequence for a single denim co-ord, a cropped jacket and matching wide leg jeans, on one consistent model, moving her through a colonnaded courtyard walk, a set of blue toned streets with carved wooden doors, and clean studio style portraits, all cut together into a short form vertical video reel with campaign style captions: one outfit, one model, zero photoshoots.',
    process: [],
    screenshots: {},
    features: [
      'Consistent AI generated model held across every shot',
      'Single denim co-ord styled across studio and on location looks',
      'Multiple location styled scenes without an actual shoot or travel',
      'Full campaign sequence cut into a vertical video reel',
      'Campaign style caption treatment matching real ad formats',
    ],
    designHighlights: [
      'One model, one outfit, held consistent across the full sequence',
      'Studio portraits paired with location styled street and courtyard shots',
      'Blue toned streets and carved wooden doors used as a backdrop',
      'Campaign captions styled to match real catalogue and ad copy',
    ],
    featuresSectionTitle: 'Campaign Deliverables',
    featuresSectionEyebrow: 'WHAT WE PRODUCED',
    businessImpactSummary:
      'As an in house concept, this is not a real client or a real shoot. It exists to demonstrate what a virtual photoshoot can replace, a full location spanning campaign, catalogue, and ad set, built around one consistent model and outfit, without travel or a physical shoot.',
    businessImpact: [
      'Demonstrates a full campaign built without an actual photoshoot',
      'Shows model and outfit consistency across a location spanning sequence',
      'Delivered as a ready to post vertical video reel',
      'Used as a live example when scoping fashion and apparel campaign work',
    ],
    results: [{ label: 'Distinct Looks In One Sequence', value: 3 }],
    gallery: denimGallery,
    video: {
      src: asset(denimVideoFiles, 'DENIM_campaign_reel_9x16.mp4'),
      poster: denim('reel_storyboard.jpg'),
      label: 'Vertical Campaign Reel',
    },
    finalCtaHeadline: 'Curious What a Virtual Photoshoot Could Do for Your Brand?',
    finalCtaDescription:
      "Book a free consultation and we'll show you what a location spanning campaign could look like without the travel budget.",
  },
];
