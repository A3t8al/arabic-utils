const ARABIC_LETTERS = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/;
const LATIN_LETTERS = /[A-Za-z]/;

/** Return whether a string contains Arabic letters. */
export function isArabic(value) {
  return ARABIC_LETTERS.test(String(value));
}

/** Detect the dominant script: arabic, latin, mixed, or unknown. */
export function detectScript(value) {
  const text = String(value);
  const arabicCount = (text.match(/[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/g) || []).length;
  const latinCount = (text.match(/[A-Za-z]/g) || []).length;
  if (!arabicCount && !latinCount) return 'unknown';
  if (arabicCount && latinCount) return 'mixed';
  return arabicCount ? 'arabic' : 'latin';
}

/** Return word count, character count, and repeated words. */
export function textStats(value) {
  const text = String(value).trim();
  const words = text ? text.split(/\s+/).filter(Boolean) : [];
  const counts = new Map();
  for (const word of words) {
    const key = word.toLocaleLowerCase('ar');
    counts.set(key, (counts.get(key) || 0) + 1);
  }
  const repeatedWords = [...counts.entries()]
    .filter(([, count]) => count > 1)
    .sort((a, b) => b[1] - a[1])
    .map(([word, count]) => ({ word, count }));
  return { characters: [...text].length, words: words.length, repeatedWords };
}
