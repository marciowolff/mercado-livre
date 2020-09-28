import React from 'react'
import { Input, Button, Icon, ElementTag } from '../'

import './index.scss'

const InputsSearch = ({
  id = '',
  tag = 'form',
  label,
  placeholder,
  refs,
  onKeyUp,
  onSubmit,
  onBlur,
  onClear,
  showClear,
  value,
}) => {
  const handleKeyUp = event => {
    event.preventDefault()

    if (onKeyUp)
      onKeyUp(event.target.value)
  }

  const handleKeyDown = event => {
    if (onSubmit && event.key === 'Enter') {
      event.preventDefault()
      onSubmit(event.target.value)
    }
  }

  const handleOnBlur = event => {
    if (onBlur)
      onBlur(event.target.value)
  }

  const handleSubmit = event => {
    const container = event.target.parentNode.parentNode.parentNode
    const { value } = container.querySelector('input')
    onSubmit(value)
  }

  return (
    <ElementTag tag={tag} className="inputSearch__container">
      <Input
        id={`search--${id}`}
        label={label}
        refs={refs}
        className="inputSearch__input"
        placeholder={placeholder}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        onBlur={handleOnBlur}
        onClear={onClear}
        showClear={showClear}
        defaultValue={value}
      />

      <Button
        id={`btnSearch--${id}`}
        className="button--inline"
        onClick={handleSubmit}
        type="submit"
      >

        <Icon name="lupa" />
      </Button>      
    </ElementTag>
  )
}

export default InputsSearch