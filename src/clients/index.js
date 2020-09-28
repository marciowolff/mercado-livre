import React from 'react';
import createClient from './api';

export const services = createClient(process.env.API_URL);

export function withServices(Component) {
  const ComponentWithServices = props => (
    <Component service={services} {...props} />
  );

  return ComponentWithServices;
}
