import routes, { unificationRoutes } from './routes'
import pageRoutes from './pages/routes'

jest.mock('./pages/routes', () => [
  { name: 'old', exact: true, path: '/old', redirect: '/'},
  { name: 'home', exact: true, path: '/', component: () => <div></div> },
  { name: 'search', exact: true, path: '/search', component: () => <div></div> },
  { name: 'detail', exact: true, path: '/detail/:id', component: () => <div></div>,
    routes: [
      { name: 'detail-plan', exact: true, path: '/plan', component: () => <div></div> },
      { name: 'detail-invoice', exact: true, path: '/invoice', component: () => <div></div> },
    ]
  }
])

it('Routes.unificationRoutes should be a function', () => {
  expect(typeof unificationRoutes).toBe('function')
})

it('Should render routes', () => {
  expect(routes.length).toBe(4)
})

it('Should break subRoutes', () => {
  expect(pageRoutes.length).toBe(4)
  expect(unificationRoutes().length).toBe(6)
})