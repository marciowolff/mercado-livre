import React from 'react'
import './index.scss'

const Load = ({ id = '', className = '', type = 'progress', icon, show, hideMessage }) => {
  const types = {
    progress: 'progress--bar',
    icon: 'loading--icon'
  }

  return show ? (
    <span id={id} className={`loading ${className ? className : ''} ${types[type]}`}>
      {icon && icon}
      {!hideMessage && <small>carregando...</small>}
    </span>
  ) : null
}

export default Load