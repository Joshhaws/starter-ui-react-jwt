
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SubmitButton from '../components/submit-button.js'

export function ForgotPassword() { 
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [showError, setShowError] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()
  }

  const forgotPassword = event => {
    setLoading(true)

    if (true) {
      setTimeout(() => {
        setShowSuccess(!showSuccess)
        setLoading(false)
      }, 1000);
    } else {
      setTimeout(() => {
        setShowError(!showError);
        setError('There was an error');
        setLoading(false)
      }, 1000);
    }
  }

  return (
    <div className="w-full max-w-lg">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-12 pt-6 pb-8 mb-4">
        <h1 className="text-3xl mb-8 font-bold">Forgot Password</h1>
        {showError &&
          <p className="text-red-600">{error}</p>
        }
        {showSuccess &&
          <p className="text-green-600">Password Reset Request sent</p>
        }
        <p className="mb-6">Enter email to recover forgotten password</p>

        <div className="mb-8">
          <label className="block text-gray-700 text-sm font-bold mb-2 flex">Email</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name='email'
            placeholder='Email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-2">
          <SubmitButton passedFunction={forgotPassword} passedLoading={loading}/>
        </div>

        <div className="mb-4 text-sm">
          <Link to='/' className="hover:underline">Back to Login</Link>
        </div>
        
      </form>
    </div>

  )
}


export default ForgotPassword;