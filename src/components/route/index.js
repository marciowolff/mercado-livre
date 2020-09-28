import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

const RouteWithSubRoutes = ({ routes, pathFrom = '' }) => routes.map((route, i) => 
  <InsertRoute key={i} route={{ ...route, pathFrom, pathComplete: `${pathFrom}${route.path}` }} pathFrom={pathFrom} />
)

const InsertRoute = ({ route, pathFrom }) => (
  <Switch>
    {route.redirect &&
      <Redirect exact={route.exact} from={`${pathFrom}${route.path}`} to={`${pathFrom}${route.redirect}`} />
    }

    <Route
      key={`${pathFrom}${route.path}`}
      exact={route.exact}
      path={`${pathFrom}${route.path}`}
      render={props => (
        <route.component {...props} routes={route.routes} currentRoute={route} />
      )}
    />

    {route.routes &&
      <RouteWithSubRoutes routes={route.routes} pathFrom={`${pathFrom}${route.path}`} />
    }
  </Switch>
)

export default RouteWithSubRoutes
