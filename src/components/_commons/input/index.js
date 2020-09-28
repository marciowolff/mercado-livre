import React, { useState } from 'react'
import Label from '../label'
import Button from '../button'
import './index.scss'

const Input = ({
  id,
  type,
  label,
  className = '',
  disabled,
  required,
  onChange,
  onClick,
  icon,
  maxLength,
  refs,
  error,
  errorMessage = '',
  value,
  onClear,
  classbtnCelar = '',
  showClear = false,
  ...attrs
}) => {

  const [textInput, setrTextInput] = useState({ value: value || '' })

  const handleOnClear = () => {
    textInput.value = ''
    
    if (onClear)
      onClear(textInput)
  }

  return (
    <span className={`input__container ${className ? className : ''}${disabled ? ' disabled': ''}${required ? ' required': ''}${error ? ' error': ''}${onClear ? ' onClear': ''}`}>

    {label && <Label className="label" htmlFor={id}>{label}</Label>}

    <span className="input">
      {icon && <Label className={`icon ${icon}`} htmlFor={id}/>}
      <input
        id={id}
        ref={el => {
          refs ? refs(el) : null
          showClear ? setrTextInput(el) : null
        }}
        type={type ? type : 'text'}
        disabled={disabled}
        required={required}
        onChange={onChange}
        onClick={onClick}
        maxLength={maxLength}
        {...attrs }
      />
      {showClear && textInput && (
        textInput.value.length > 0 && <Button className={`btn--clear ${classbtnCelar}`} onClick={() => !disabled ? handleOnClear() : null}>x</Button> 
      )}
    </span>
    {error && <span className="error">{errorMessage}</span>}
  </span>
  )
}

export default Input
