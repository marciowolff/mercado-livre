import React from 'react'

import { List, Output } from '../../../components'
import { mask } from '../../../utils'
import IcoShipping from '../../../assets/img/ic_shipping.png'
import './index.scss'

const Result = ({ items = [], history }) => {

  const handleClickItem = (item) => history.push(`/items/${item.id}`)
  
  const ItemList = ({ item }) => {
    const {title, thumbnail, price, address, shipping } = item
  
    return (
      <>
        <img src={thumbnail} />
        <div className="description">
          {shipping && shipping.free_shipping && <img className="icoShipping" src={IcoShipping} />}
          <Output
            className="text--h3"
            id="title"
            value={title}
          />
          <Output
            className="text--h2"
            id="price"
            value={mask(price, 'currency', {symbol: '$'})}
          />
        </div>
        <aside>
          <Output
            id="price"
            value={address.state_name}
          />
        </aside>
      </>
    )
  }

  return (
    <List
      className="list--search"
      items={items.map((item) => ({
        ...item,
        Component: ItemList,
      }))}
      handleClick={handleClickItem}
    />
  )
}

export default Result