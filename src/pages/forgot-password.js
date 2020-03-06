
import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class ForgotPassword extends Component {
  state = {
    username: "",
    password: "",
    email: "",
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    window.location.href = '/';
  }

  render() {
    return (
      <div className="w-full max-w-lg">
        <form onSubmit={this.handleSubmit} className="bg-white shadow-md rounded px-12 pt-6 pb-8 mb-4">
          <h1 className="text-3xl mb-8 font-bold">Forgot Password</h1>
          <p className="mb-6">Enter email to recover forgotten password</p>

          <div className="mb-8">
            <label className="block text-gray-700 text-sm font-bold mb-2 flex">Email</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name='email'
              placeholder='Email'
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div className="mb-2">
            <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded-full cursor-pointer" type='submit' />
          </div>

          <div className="mb-4 text-sm">
            <Link to='/' className="hover:underline">Back to Login</Link>
          </div>
         
        </form>
      </div>

    )
  }
}


export default ForgotPassword;