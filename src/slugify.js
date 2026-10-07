import { normalizeArabic } from './normalize.js';

/** Create a URL-friendly slug while preserving Arabic characters. */
export function slugifyArabic(value, options = {}) {
  const { separator = '-' } = options;
  const normalized = normalizeArabic(value)
    .toLocaleLowerCase('ar')
    .replace(/[^\p{L}\p{N}]+/gu, separator)
    .replace(new RegExp(`${escapeRegExp(separator)}+`, 'g'), separator)
    .replace(new RegExp(`^${escapeRegExp(separator)}|${escapeRegExp(separator)}$`, 'g'), '');
  return normalized;
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
