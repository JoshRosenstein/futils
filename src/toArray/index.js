import is from "../is";

export default value => {
  if (is("Array")(value)) {
    return value;
  }

  return [value];
};
