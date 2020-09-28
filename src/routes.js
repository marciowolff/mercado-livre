import pages from './pages/routes'

const routes = [
  pages  
]

export const unificationRoutes = () => {
  const unitRoutes = []

  const loopRoutes = (routes => {
    routes.forEach(route => {
      if (route.routes) {
        loopRoutes(route.routes)
      }
      unitRoutes.push(route)
    })
  })
  loopRoutes([].concat.apply([], routes))

  return unitRoutes
}

export default [].concat.apply([], routes)
