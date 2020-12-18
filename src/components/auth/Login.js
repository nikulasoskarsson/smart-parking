import React from 'react'
import { Link } from 'react-router-dom'

const Login = ({ isAuthenticated, setIsAuthenticated }) => {
  return (
    <div className='signup'>
      <div className='signup__container'>
        <h3 className='signup__heading'>Log in</h3>
        <form action='#' className='signup__form'>
          <div className='signup__row'>
            <div className='signup__form-field'>
              <label
                htmlFor='email'
                className='signup__label signup__label-phone'
              >
                Email
              </label>
              <input
                type='text'
                a
                id='email'
                className='signup__input'
                placeholder='email'
              />
            </div>
          </div>

          <div className='signup__row'>
            <div className='signup__form-field'>
              <label htmlFor='password' className='signup__label'>
                Password
              </label>
              <input
                type='text'
                id='password'
                className='signup__input'
                placeholder='Password'
              />
            </div>
          </div>
          <div className='signup__row margin-top-4'>
            <Link
              to='/'
              className='signup__button button-primary'
              onClick={() => setIsAuthenticated(!isAuthenticated)}
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
