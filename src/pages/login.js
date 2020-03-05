
import React, {Component} from 'react';
import {loginUser} from '../services/auth-service/auth-service';

class Login extends Component {
  state = {
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
    loginUser(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Log In</h1>

        <label>Email</label>
        <input
          name='email'
          placeholder='Email'
          value={this.state.email}
          onChange={this.handleChange}
        />

        <label>Password</label>
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={this.state.password}
          onChange={this.handleChange}
        />

        <input type='submit'/>
      </form>
    )
  }
}


export default Login;