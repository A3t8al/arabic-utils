# Arabic Utils Toolkit

[![npm version](https://img.shields.io/npm/v/arabic-utils-toolkit.svg)](https://www.npmjs.com/package/arabic-utils-toolkit)
[![tests](https://github.com/A3t8al/arabic-utils/actions/workflows/test.yml/badge.svg)](https://github.com/A3t8al/arabic-utils/actions)
[![license](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

> مجموعة أدوات JavaScript خفيفة وعملية لمعالجة النصوص العربية.

**Arabic Utils** helps JavaScript developers handle common Arabic text tasks without pulling in a large dependency.

## المزايا | Features

- تحويل الأرقام العربية والهندية إلى أرقام لاتينية والعكس
- إزالة التشكيل والعلامات القرآنية
- تطبيع أشكال الحروف العربية الشائعة
- كشف النص العربي واللغة الغالبة
- إنشاء روابط `slug` مع الحفاظ على الحروف العربية
- إحصائيات النص والكلمات المتكررة

## التثبيت | Installation

```bash
npm install arabic-utils-toolkit
```

## الاستخدام | Usage

```js
import {
  toArabicDigits,
  normalizeArabic,
  removeTashkeel,
  slugifyArabic,
  textStats
} from 'arabic-utils-toolkit';

console.log(toArabicDigits('Invoice 1250'));
// Invoice ١٢٥٠

console.log(removeTashkeel('مَرْحَبًا'));
// مرحبا

console.log(normalizeArabic('إِنَّ أَحْمَدَ يَرَى'));
// ان احمد يري

console.log(slugifyArabic('أدوات المطورين العرب'));
// ادوات-المطورين-العرب

console.log(textStats('عربي عربي نص'));
// { characters: 12, words: 3, repeatedWords: [{ word: 'عربي', count: 2 }] }
```

> ملاحظة: `normalizeArabic` مخصصة للبحث والمقارنة، وليست لتغيير النص المعروض للمستخدم؛ فهي توحّد أشكالًا مثل `ى` إلى `ي` و`ئ` إلى `ي`.

## الموقع التجريبي | Demo

شغّل `npm run demo` ثم افتح `/website/`، أو فعّل GitHub Pages من **root** المستودع؛ رابط الموقع سيكون: [a3t8al.github.io/arabic-utils/website](https://a3t8al.github.io/arabic-utils/website/).

## التطوير | Development

```bash
npm install
npm test
npm run test:watch
```

## خارطة الطريق | Roadmap

- [ ] تفقيط الأرقام مع دعم العملات العربية
- [ ] تحويل التاريخ الميلادي والهجري
- [ ] حزمة TypeScript definitions
- [ ] دعم المتصفح عبر CDN
- [ ] توثيق API كامل

## المساهمة | Contributing

المساهمات مرحب بها. افتح Issue أو Pull Request، ويمكنك البدء بالمهام الموسومة `good-first-issue`.

## الترخيص | License

Copyright (c) 2026 A3t8al — MIT License
