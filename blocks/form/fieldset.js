/**
 * fieldset.js
 * Utility to render an accessible <fieldset> block.
 *
 * Exports a function that returns an HTML string for a fieldset with an optional legend
 * and arbitrary inner content. Includes simple HTML-escaping for safety when used
 * with untrusted strings.
 *
 * Usage:
 *   import fieldset from './fieldset';
 *   const html = fieldset({ legend: 'Personal info', content: '<input .../>' });
 */

function escapeHtml(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function attrsToString(attrs) {
  if (!attrs) return '';
  return Object.keys(attrs)
    .map((k) => {
      const v = attrs[k];
      if (v === false || v == null) return '';
      if (v === true) return ` ${k}`;
      return ` ${k}="${escapeHtml(v)}"`;
    })
    .join('');
}

function fieldset({ legend, content = '', className = '', attrs = {} } = {}) {
  const legendHtml = legend ? `<legend>${escapeHtml(legend)}</legend>` : '';
  const attrsStr = attrsToString(attrs);
  const cls = className ? ` class="${escapeHtml(className)}"` : '';
  return `<fieldset${cls}${attrsStr}>${legendHtml}${content}</fieldset>`;
}

// Support both ES module and CommonJS consumers.
export default fieldset;
module.exports = fieldset;
