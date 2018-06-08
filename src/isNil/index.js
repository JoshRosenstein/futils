import is from "../is";

export default value => is("undefined")(value) || is("null")(value);
