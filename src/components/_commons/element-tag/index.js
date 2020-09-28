import React from 'react'

const ElementTag = ({ children, tag, className = '' }) => {
  const Tag = tag ? tag : 'div'

  if (!children) {
    return false
  }

  return (
    <Tag className={className}>{children}</Tag>
  )
}

export default ElementTag
