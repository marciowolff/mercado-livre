import React from 'react'

import { InputSearch } from '../../components'
import Breadcrumb from './breadcrumb'
import Logo from "../../assets/img/Logo_ML.png";
import './index.scss'

const Container = ({
  id,
  className ='',
  history,
  searchValue,
  searchSubmit,
  hideMain,
  breadcrumb = [],
  children }) => {
  const handleClickLogo = () => history.push('/')

  const handleSubmit = value => {
    if (value.length > 0) {
      searchSubmit ? searchSubmit(value) : history.push(`/items?search=${value}`)
    }
  }

  return (
    <>
      <header id="page__header">
        <div className="page__container">  
          <img src={Logo} className="logoApp" onClick={handleClickLogo} alt="Mercado Livre" />      
          <InputSearch
            id="container" 
            value={searchValue}
            placeholder="Nunca pare de procurar"
            onSubmit={handleSubmit}
            onClear={() => history.push('/')}
            showClear={true}
          />
        </div>
        
        {breadcrumb.length > 0 && (
          <Breadcrumb
            history={history}
            id="page__header__breadcrumb"
            items={breadcrumb}
          />
        )}
      </header>

      {!hideMain && <main id={`page__${id}`} className={`page__container ${className}`}>
        {children}
      </main>}
    </>
  )
}

export default Container