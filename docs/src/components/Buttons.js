/* eslint-disable jsx-a11y/anchor-has-content*/
import React from 'react'

export const Button = React.forwardRef((props, ref) => (
  <button type="button" className="btn" ref={ref} {...props} />
))
// eslint-disable-next-line
export function LinkButton(props) {
  return <a className="btn" {...props} />
}
