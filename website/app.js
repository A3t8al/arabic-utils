import {
  toArabicDigits,
  removeTashkeel,
  normalizeArabic,
  slugifyArabic,
  textStats
} from '../src/index.js';

const input = document.querySelector('#input');
const output = document.querySelector('#output');

const actions = {
  digits: toArabicDigits,
  tashkeel: removeTashkeel,
  normalize: normalizeArabic,
  slug: slugifyArabic,
  stats: textStats
};

document.querySelectorAll('button').forEach((button) => button.addEventListener('click', () => {
  const result = actions[button.dataset.action](input.value);
  output.textContent = typeof result === 'object'
    ? JSON.stringify(result, null, 2)
    : result;
}));
