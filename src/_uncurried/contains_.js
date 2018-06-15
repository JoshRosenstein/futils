import equals_ from "./equals_";


export default (x, arr) =>{
  let index = -1;
  let flag = false;

  while (++index < arr.length && !flag) {
    if (equals_(arr[index], x)) {
      flag = true;
    }
  }

  return flag;
}
