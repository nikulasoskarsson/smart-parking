import React from 'react'

const SignUp = ({ isAuthenticated, setIsAuthenticated }) => {
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

          <div className='signup__row'>
            <div className='signup__form-field'>
              <label htmlFor='country' className='signup__label'>
                Country
              </label>
              <input
                type='text'
                id='country'
                className='signup__input'
                placeholder='country'
              />
            </div>
            <div className='signup__form-field'>
              <label
                htmlFor='phone'
                className='signup__label signup__label-phone'
              >
                Phone
              </label>
              <div className='signup__area-code-row'>
                <span className='signup__area-code'>+45</span>
                <input
                  type='text'
                  id='phone'
                  className='signup__input'
                  placeholder='phone'
                />
              </div>
            </div>
            <div className='signup__form-field'>
              <label
                htmlFor='email'
                className='signup__label signup__label-phone'
              >
                Email
              </label>
              <input
                type='text'
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
            <div className='signup__form-field'>
              <label htmlFor='confirmPassword' className='signup__label'>
                Confirm password
              </label>
              <input
                type='text'
                id='confirmPassword'
                className='signup__input'
                placeholder='Confirm password'
              />
            </div>
          </div>

          <div className='signup__row'>
            <div className='signup__form-field'>
              <label htmlFor='creditCard' className='signup__label'>
                Credit card
              </label>
              <input
                type='text'
                id='creditCard'
                className='signup__input'
                placeholder='Enter card number'
              />
            </div>
            <div className='signup__form-field'>
              <label htmlFor='lastName' className='signup__label'>
                Month
              </label>
              <select id='month' className='signup__select'>
                <option value='' disabled selected>
                  Month
                </option>
              </select>
            </div>

            <div className='signup__form-field'>
              <label htmlFor='lastName' className='signup__label'>
                Year
              </label>
              <select id='month' className='signup__select'>
                <option value='' disabled selected>
                  Year
                </option>
              </select>
            </div>
          </div>
          <div className='signup__row margin-top-4'>
            <p className='signup__terms'>
              By clicking “Sign up” you are agreeing to the
              <span className='underline'>
                SmartParking terms and condition
              </span>
              and <span className='underline'>Privacy Policy</span>
            </p>
            <a
              href='#'
              className='signup__button button-primary'
              onClick={() => setIsAuthenticated(!isAuthenticated)}
            >
              Sign up
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp
