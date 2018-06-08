export default function replace(regex, replacer, str) {
  if (replacer === undefined) {
    return function(replacerHolder, strHolder) {
      return replace(regex, replacerHolder, strHolder);
    };
  } else if (str === undefined) {
    return function(strHolder) {
      return replace(regex, replacer, strHolder);
    };
  }

  return str.replace(regex, replacer);
}
