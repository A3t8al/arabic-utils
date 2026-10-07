# Arabic Utils

[![npm version](https://img.shields.io/npm/v/arabic-utils.svg)](https://www.npmjs.com/package/arabic-utils)
[![tests](https://github.com/YOUR_USERNAME/arabic-utils/actions/workflows/test.yml/badge.svg)](https://github.com/YOUR_USERNAME/arabic-utils/actions)
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
npm install arabic-utils
```

## الاستخدام | Usage

```js
import {
  toArabicDigits,
  normalizeArabic,
  removeTashkeel,
  slugifyArabic,
  textStats
} from 'arabic-utils';

console.log(toArabicDigits('Invoice 1250'));
// Invoice ١٢٥٠

console.log(removeTashkeel('مَرْحَبًا'));
// مرحبا

console.log(normalizeArabic('إِنَّ أَحْمَدَ يَرَى'));
// ان احمد يري

console.log(slugifyArabic('أدوات المطورين العرب'));
// ادوات-المطورين-العرب

console.log(textStats('عربي عربي نص'));
// { characters: 13, words: 3, repeatedWords: [{ word: 'عربي', count: 2 }] }
```

## الموقع التجريبي | Demo

افتح `website/index.html` محلياً، أو انشر مجلد `website` عبر GitHub Pages.

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

MIT © arabic-utils contributors
