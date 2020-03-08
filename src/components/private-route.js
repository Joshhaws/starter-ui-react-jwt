import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const auth = {
  isAuthenticated: false,

  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100) // fake async
  }
}



export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    auth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to='/' />
  )} />
)