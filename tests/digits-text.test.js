import { toArabicDigits, toEnglishDigits, isArabic, detectScript } from '../src/index.js';

test('converts Latin and Persian digits to Arabic digits', () => {
  expect(toArabicDigits('Order 123 / ۱۲۳')).toBe('Order ١٢٣ / ١٢٣');
});

test('converts Arabic and Persian digits to English digits', () => {
  expect(toEnglishDigits('السعر ١٢٥۰')).toBe('السعر 1250');
});

test('detects Arabic content and dominant script', () => {
  expect(isArabic('مرحبا بالعالم')).toBe(true);
  expect(detectScript('مرحبا')).toBe('arabic');
  expect(detectScript('Hello')).toBe('latin');
  expect(detectScript('Hello مرحبا')).toBe('mixed');
  expect(detectScript('123 !')).toBe('unknown');
});
