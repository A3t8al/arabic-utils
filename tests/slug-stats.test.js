import { slugifyArabic, textStats } from '../src/index.js';

test('creates a clean Arabic slug', () => {
  expect(slugifyArabic('  أدوات  المطوّرين العرب! ')).toBe('ادوات-المطورين-العرب');
});

test('supports a custom slug separator', () => {
  expect(slugifyArabic('مرحبا بالعالم', { separator: '_' })).toBe('مرحبا_بالعالم');
});

test('returns useful text statistics and repeated words', () => {
  expect(textStats('عربي عربي نص')).toEqual({
    characters: 12,
    words: 3,
    repeatedWords: [{ word: 'عربي', count: 2 }]
  });
});
