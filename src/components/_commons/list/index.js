import React from 'react'

import './index.scss'

const List = ({ items = [], className='', handleClick }) => (
  <ul className={`list ${className}`}>

    {items && items.map((item, index) => (
      <li
        key={index}
        id={item.id}
        className={`list__li ${handleClick ? 'list__li--link' : ''} ${
          item.className ? item.className : ''
        }${item.active ? ' active' : ''}`}
        onClick={() => (handleClick ? handleClick(item) : null)}
      >
        {item.Component && <item.Component item={item} />}
      </li>
    ))}

  </ul>
)

export default List
