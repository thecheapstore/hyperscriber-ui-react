/** Deterministic string hash → 32-bit seed. */
const hashString = (str: string): number => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (Math.imul(31, hash) + str.charCodeAt(i)) | 0;
  }
  return hash >>> 0;
};

/** Mulberry32 — small, fast, deterministic PRNG. Same seed always produces the same sequence. */
export const createSeededRandom = (seed: string) => {
  let state = hashString(seed) || 1;
  return () => {
    state |= 0;
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

/** Random integer in [min, max], inclusive. */
export const seededInt = (rand: () => number, min: number, max: number): number =>
  Math.floor(rand() * (max - min + 1)) + min;

/** Random float in [min, max], rounded to `decimals` places. */
export const seededFloat = (rand: () => number, min: number, max: number, decimals = 1): number => {
  const value = rand() * (max - min) + min;
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
};
