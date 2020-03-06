
import React, {Component} from 'react';
import {loginUser} from '../services/auth-service/auth-service';
import { Link } from 'react-router-dom';

class Landing extends Component {

  render() {
    return (
      <p>you've made it to the next level</p>
    )
  }
}


export default Landing;