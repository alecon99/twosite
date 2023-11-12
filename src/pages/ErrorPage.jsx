import React from 'react'

import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='text-center '>
      <div className='bg-black py-3'>
          <img src={''} alt="logo" className='logo'/>
      </div>
      <div>
        <h1>404</h1>
        <div>Oops! The page you are looking for can't be found.</div>
        <Link to={'/'} className='fw-bold'>Return to home</Link>
      </div>
    </div>
  )
}

export default ErrorPage