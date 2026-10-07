import { removeTashkeel, normalizeArabic } from '../src/index.js';

test('removes tashkeel without changing letters', () => {
  expect(removeTashkeel('مَرْحَبًا بِكُمْ')).toBe('مرحبا بكم');
});

test('normalizes common Arabic variants', () => {
  expect(normalizeArabic('إِنَّ أَحْمَدَ يَرَى')).toBe('ان احمد يري');
});

test('can normalize ta marbuta for loose matching', () => {
  expect(normalizeArabic('مدرسة', { normalizeTaMarbuta: true })).toBe('مدرسه');
});
