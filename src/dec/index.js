import is from "../is";
import replace from "../replace";
import toString from "../toString";
import isNil from "../isNil";

export default x => {
  if (isNil(x)) {
    return x;
  }
  if (is("String")(x)) {
    let xx = parseInt(x);

    return replace(toString(xx), toString(xx - 1), x);
  } else {
    return x - 1;
  }
};
