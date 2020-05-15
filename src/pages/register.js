
import React, { useState } from 'react';
import {registerUser} from '../services/auth-service/auth-service';
import { Link } from 'react-router-dom';
import SubmitButton from '../components/submit-button.js'

export function Register() {
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const register = event => {
    console.log('test');
  }

  return (
    <div className="w-full max-w-lg">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-12 pt-6 pb-8 mb-4">
        <h1 className="text-3xl mb-8 font-bold">Sign Up</h1>
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
        
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2 flex">Password</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type='password'
            name='password'
            placeholder='Password'
            value={password}
            onChange={e => setPassword(e.targer.value)}
          />
        </div>
        
        <div className="mb-8">
          <label className="block text-gray-700 text-sm font-bold mb-2 flex">Password Confirmation</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type='password'
            name='Password confirmation'
            placeholder='Password Confirmation'
            value={passwordConfirmation}
            onChange={e => setPasswordConfirmation(e.targer.value)}
          />
        </div>

        <div className="mb-2">
          <SubmitButton passedFunction={register} />
        </div>

        <div className="mb-4 text-sm">
          <Link to='/' className="hover:underline">Back to Login</Link>
        </div>
        
      </form>
    </div>

  )
}


export default Register;