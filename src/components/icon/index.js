
import React from 'react'

import lupa from './ico-lupa'
import close from './ico-close'
import loading from './ico-loading'

export const icons = {
  lupa,
  close,
  loading
}

const Icon = ({ name, className = '', width = 24, height = 24, ...props }) => {
  const Ico = icons[name]
  return name ? <Ico
    className={`ico ${name} ${className}`}
    width={width}
    height={height}
    {...props}
  /> : null
}

export default Icon
