import test_ from "./test_"
import escapeString_ from './escapeString_'


export default (subset, set) =>
  test_(new RegExp(`^${escapeString_(subset)}`),set)
