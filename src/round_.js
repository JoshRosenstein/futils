//From Lodash

export default (precision, number) => {
    precision = precision == null ? 0 : Math.min(precision, 292)
    if (precision) {
      let pair = `${number}e`.split('e')
      const value = Math.round(`${pair[0]}e${+pair[1] + precision}`)
      pair = `${value}e`.split('e')
      return +`${pair[0]}e${+pair[1] - precision}`
    }

    return Math.round(number)
  }
