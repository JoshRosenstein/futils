import reduceValues from "../reduceValues";
import attach from "../attach";
import reverse from "../reverse";
import curry from "../curry";

export default curry((keychain, value) =>
  reduceValues(accumulated => key => attach(key)(accumulated)({}))(value)(
    reverse(keychain)
  )
);
