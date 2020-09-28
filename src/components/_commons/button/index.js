import React from 'react'
import './index.scss'

const Button = ({ children, className = '', onClick, type = 'button', ...attrs }) => {
  const Component = type === 'link' ? 'a' : 'button'
  return (
    <Component className={`button ${className}`} type={type} {...attrs} onClick={onClick}>
      {children}
    </Component>
  )
}

export default Button
