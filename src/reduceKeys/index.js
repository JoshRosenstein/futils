import reduceWithValueKey from "../reduceWithValueKey"

export default fn => reduceWithValueKey(acc => () => key => fn(acc)(key))
