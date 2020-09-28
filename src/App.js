import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import routes from './routes';
import { RouteWithSubRoutes } from './components'
import './App.scss'

const App = () => (
  <Router hasjType="slash">
    <RouteWithSubRoutes routes={routes} />
  </Router>
);

export default App;

