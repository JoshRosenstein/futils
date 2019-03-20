export default pattern => new RegExp(pattern.source, (pattern.global ? 'g' : '') +
    (pattern.ignoreCase ? 'i' : '') +
    (pattern.multiline ? 'm' : '') +
    (pattern.sticky ? 'y' : '') +
    (pattern.unicode ? 'u' : ''));
//# sourceMappingURL=cloneRegExp_.js.map