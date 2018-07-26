import React from 'react'

export const Button = React.forwardRef((props, ref) => (
  <button type="button" className="btn" ref={ref} {...props} />
))

export function LinkButton(props) {
  return <a className="btn" {...props} />
}
