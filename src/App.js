import React from 'react';
import './App.css';
import Register from './pages/register';
import Login from './pages/login';
import ForgotPassword from './pages/forgot-password';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App w-screen h-screen flex justify-center items-center bg-gray-300">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
      </Switch>
    </div>
  );
}

export default App;
