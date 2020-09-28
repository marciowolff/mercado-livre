import React, { useState } from 'react'
import { ElementTag } from '../../../components'
import './index.scss'

const PhotoGallery = ({ items = [], className = '', tag = 'div' }) => {
  const [featured, setFeatured] = useState(items[0])

  const handleClick = item => setFeatured(item)

  return (
    items.length > 0 ? (
      <ElementTag tag={tag} className={`photoGallery ${className}`}>
        <figure>
          <img src={featured.url} />
        </figure>
        <span className="thumbs">
          {items.filter((item, index) => index <= 3).map((figure, index) =>
            <img key={index} className={figure.url === featured.url ? 'active' : ''} src={figure.url} onClick={() => handleClick(figure)} />
          )}
        </span>
      </ElementTag>
    ): null
  )
}

export default PhotoGallery