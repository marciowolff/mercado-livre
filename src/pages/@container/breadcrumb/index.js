import React from 'react'

import { Button } from '../../../components'

const Breadcrumb = ({ id, items = [], history }) => (
  <nav id={id}>
    <ul className="page__container">
      {items.map((item, index) => 
        <li key={index}>
          {index === items.length - 1 ? (
            <p>{item.label}</p>
          ) : (
            <Button
              onClick={() => index === items.length - 2 && items.length > 2 ? history.goBack() : history.push(item.url)}
              type="link"
            >{item.label}</Button>
          )}
        </li>
      )}
    </ul>
  </nav>
)

export default Breadcrumb