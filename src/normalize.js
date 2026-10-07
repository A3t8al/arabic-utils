const TASHKEEL = /[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06ED]/g;

/** Remove Arabic diacritics and Quranic annotation marks. */
export function removeTashkeel(value) {
  return String(value).replace(TASHKEEL, '');
}

/** Normalize common Arabic letter variants for search and comparison. */
export function normalizeArabic(value, options = {}) {
  const { removeDiacritics = true, normalizeTaMarbuta = false } = options;
  let text = String(value);
  if (removeDiacritics) text = removeTashkeel(text);
  return text
    .replace(/[إأآٱ]/g, 'ا')
    .replace(/ى/g, 'ي')
    .replace(/ؤ/g, 'و')
    .replace(/ئ/g, 'ي')
    .replace(/ة/g, normalizeTaMarbuta ? 'ه' : 'ة')
    .replace(/ـ/g, '')
    .replace(/[\u200C\u200D]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}
