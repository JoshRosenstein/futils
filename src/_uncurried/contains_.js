import equals_from "./equals_";


export default (x, arr) =>{
  if (arr === undefined) {
    return arrHolder => contains_(x, arrHolder);
  }
  let index = -1;
  let flag = false;

  while (++index < arr.length && !flag) {
    if (equals_(arr[index], x)) {
      flag = true;
    }
  }

  return flag;
}
