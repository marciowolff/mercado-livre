import React from 'react'

const Label = ({ children, ...attrs }) => (
  <label {...attrs}>{children}</label>
)

export default Label
