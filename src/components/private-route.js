import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authState } from '../services/auth-service/auth-service'

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    authState.isAuthenticated() === true
      ? <Component {...props} />
      : <Redirect to='/' />
  )} />
)