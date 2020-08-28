  
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { authState, logoutUser } from '../services/auth-service/auth-service'

export function Navbar() {

  const handleClick = event => {
    // logoutUser(this.state)
  }

  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">App Starter</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-400 hover:border-gray-400" >
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        
        <div className="text-sm lg:flex-grow">
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">Link 1</a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">Link 2</a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400">Link 3</a>
        </div>
        <div>
          { authState.isAuthenticated()
            ? <button onClick={handleClick} className="inline-block text-sm px-4 py-2 leading-none rounded-full border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0">Logout</button>
            : <Link to="/" className="inline-block text-sm px-4 py-2 leading-none rounded-full border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0 transition ease-in duration-200">Login</Link>
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar;