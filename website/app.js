const ARABIC_DIGITS = '٠١٢٣٤٥٦٧٨٩';
const input = document.querySelector('#input');
const output = document.querySelector('#output');

const removeTashkeel = (value) => String(value).replace(/[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06ED]/g, '');
const normalizeArabic = (value) => removeTashkeel(value).replace(/[إأآٱ]/g, 'ا').replace(/ى/g, 'ي').replace(/ؤ/g, 'و').replace(/ئ/g, 'ي').replace(/ـ/g, '').replace(/\s+/g, ' ').trim();
const toArabicDigits = (value) => String(value).replace(/[0-9]/g, (digit) => ARABIC_DIGITS[digit]);
const slugify = (value) => normalizeArabic(value).toLocaleLowerCase('ar').replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-+|-+$/g, '');
const stats = (value) => {
  const text = String(value).trim();
  const words = text ? text.split(/\s+/) : [];
  const map = {};
  words.forEach((word) => { map[word] = (map[word] || 0) + 1; });
  return { characters: [...text].length, words: words.length, repeatedWords: Object.entries(map).filter(([, count]) => count > 1).map(([word, count]) => ({ word, count })) };
};

document.querySelectorAll('button').forEach((button) => button.addEventListener('click', () => {
  const value = input.value;
  const action = button.dataset.action;
  const result = { digits: toArabicDigits(value), tashkeel: removeTashkeel(value), normalize: normalizeArabic(value), slug: slugify(value), stats: stats(value) }[action];
  output.textContent = typeof result === 'object' ? JSON.stringify(result, null, 2) : result;
}));
