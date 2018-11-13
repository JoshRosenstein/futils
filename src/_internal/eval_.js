export const eval_ = v => {
  let val
  try {
    val = new Function(`return ${v}`)()
  } catch (error) {
    return v
  }
  return val
}

export default eval_
