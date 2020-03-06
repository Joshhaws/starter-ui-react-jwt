import React from 'react';
import './App.css';
import Register from './pages/register';
import Login from './pages/login';

function App() {
  return (
    <div className="App w-screen h-screen flex justify-center items-center bg-gray-300">
      <Register />
      {/* <Login /> */}
    </div>
  );
}

export default App;
