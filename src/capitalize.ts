export const capitalize_ = (str = '') =>
  `${str.charAt(0).toUpperCase()}${str.slice(1).toLowerCase()}`

export const capitalize = capitalize_

export default capitalize
