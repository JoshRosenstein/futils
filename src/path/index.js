import { prop_ } from "../prop"
import { reduceValues_ } from "../reduceValues"
import { curry2 } from "../curry"

export const path_ = (keychain, tree) => {
  if (typeof keychain === "string") {
    keychain = keys.trim().split(",")
  }
  
  return reduceValues_((acc, val) => prop_(val, acc), tree, keychain)
}

export default curry2(path_)
