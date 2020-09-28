import React from 'react'

import Label from '../label'

const Output = ({
  id,
  label,
  sublabel,
  className = '',
  value,
  children
}) => (
  <span id={`container--${id}`} className={[
    'output-container',
    className ? ` ${className}` : ''
  ].join('')
  }>
    {label && <Label className="output--label">{label} <sub>{sublabel}</sub></Label>}
    <span id={id} className="output--value">{value}</span>
    {children}
  </span>
)

export default Output
