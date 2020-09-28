import React from 'react'

import { Home, Detail } from './'

export default [
  { name: 'home', exact: true, path: '/', component: Home },
  { name: 'search', exact: true, path: '/items', component: Home },
  { name: 'detail', exact: true, path: '/items/:id', component: Detail },
]