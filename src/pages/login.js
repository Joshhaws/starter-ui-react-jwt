
import React, { useState } from 'react';
import {loginUser} from '../services/auth-service/auth-service';
import { Link } from 'react-router-dom';
import SubmitButton from '../components/submit-button.js'

export function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const login = () => {
    console.log('test');
  }

  return (
    <div className="w-full max-w-lg">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-12 pt-6 pb-8 mb-4">
        <h1 className="text-3xl mb-8 font-bold">Log In</h1>
        {/* {loading &&
          <p className="text-red-600">Invalid Email or Password</p>
        } */}

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2 flex">Email</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name='email'
            placeholder='Email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-8 flex flex-col">
          <label className="block text-gray-700 text-sm font-bold mb-2 flex">Password</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-1"
            type='password'
            name='password'
            placeholder='Password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Link to='/forgot-password' className="hover:underline text-xs self-end">Forgot Password?</Link>
        </div>

        <div className="mb-2">
          <SubmitButton passedFunction={login} />
        </div>

        <div className="mb-4 text-sm">
          <Link to='/register' className="hover:underline">Create an Account</Link>
        </div>

      </form>
    </div>
  );
}


export default Login;