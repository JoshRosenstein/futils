import isNil from "../isNil";
import curry from "../curry";
export default curry((name, keyedFunctor) => {
  if (isNil(keyedFunctor)) {
    return keyedFunctor;
  }

  if (keyedFunctor.get) {
    return keyedFunctor.get(name);
  }

  return keyedFunctor[name];
});
