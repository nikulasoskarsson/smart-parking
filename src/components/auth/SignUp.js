import React from 'react'

const SignUp = () => {
  return (
    <div className='signup'>
      <div className='signup__container'>
        <h3 className='signup__heading'>Sign up</h3>
        <form action='#' className='signup__form'>
          <div className='signup__row'>
            <div className='signup__form-field'>
              <label htmlFor='firstName' className='signup__label'>
                First name
              </label>
              <input
                type='text'
                id='firstName'
                className='signup__input'
                placeholder='First name'
              />
            </div>
            <div className='signup__form-field'>
              <label htmlFor='lastName' className='signup__label'>
                Last name
              </label>
              <input
                type='text'
                id='lastName'
                className='signup__input'
                placeholder='Last name'
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp
