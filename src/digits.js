const ARABIC_DIGITS = '٠١٢٣٤٥٦٧٨٩';
const PERSIAN_DIGITS = '۰۱۲۳۴۵۶۷۸۹';
const LATIN_DIGITS = '0123456789';

/** Convert Latin and Persian digits to Arabic-Indic digits. */
export function toArabicDigits(value) {
  return String(value).replace(/[0-9۰-۹]/g, (digit) => {
    const index = LATIN_DIGITS.indexOf(digit);
    if (index !== -1) return ARABIC_DIGITS[index];
    return ARABIC_DIGITS[PERSIAN_DIGITS.indexOf(digit)];
  });
}

/** Convert Arabic-Indic and Persian digits to Latin digits. */
export function toEnglishDigits(value) {
  return String(value).replace(/[٠-٩۰-۹]/g, (digit) => {
    const arabicIndex = ARABIC_DIGITS.indexOf(digit);
    if (arabicIndex !== -1) return LATIN_DIGITS[arabicIndex];
    return LATIN_DIGITS[PERSIAN_DIGITS.indexOf(digit)];
  });
}
