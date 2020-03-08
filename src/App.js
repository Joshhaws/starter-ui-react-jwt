import React from 'react';
import './App.css';
import Navbar from './components/navbar'
import Register from './pages/register';
import Login from './pages/login';
import ForgotPassword from './pages/forgot-password';
import Landing from './pages/landing';
import {PrivateRoute} from './components/private-route'
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />

      {/* I'm almost thinking this can be a component -- just auth stuff in general */}
      <div className="App w-screen h-screen flex justify-center items-center bg-gray-300">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
          <PrivateRoute exact path="/landing" component={Landing} />
        </Switch>
      </div>
    </div>
    // then we could have another component that contains the rest of the internal app -- these routes would be protected, and the styling container would be different
    // logged in component!
  );
}

export default App;
