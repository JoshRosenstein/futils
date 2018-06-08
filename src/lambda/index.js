import is from "../is";
export default function(exp) {
  if (!is("String")(exp)) {
    return;
  }

  var parts = exp.match(/(.*)\s*[=-]>\s*(.*)/);
  parts.shift();

  var params = parts
    .shift()
    .replace(/^\s*|\s(?=\s)|\s*$|,/g, "")
    .split(" ");
  var body = parts.shift();

  parts = (!/\s*return\s+/.test(body) ? "return " : "") + body;
  params.push(parts);

  return Function.apply({}, params);
}
