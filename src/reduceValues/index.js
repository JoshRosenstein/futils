import reduceWithValueKey from "../reduceWithValueKey"

export default fn => reduceWithValueKey(acc => value => () => fn(acc)(value))
