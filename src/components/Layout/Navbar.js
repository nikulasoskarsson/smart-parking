import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faParking,
  faCog,
  faMoneyCheck,
  faQuestionCircle,
  faCheck,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons'

const Navbar = ({ accountModalActive, setAccountModalActive }) => {
  return (
    <div className='navbar'>
      <div className='navbar__container'>
        <div className='navbar__logo'>
          <h3 className='navbar__logo-text'>
            <span className='orange'>SMART</span>
            <span className='green'>PARKING</span>
          </h3>
        </div>
        <ul className='navbar__list'>
          <li className='navbar__list-item'>
            <FontAwesomeIcon
              className='navbar__list-icon'
              icon={faParking}
              size='lg'
            />
            <a href='#' className='navbar__link'>
              Your Parking
            </a>
          </li>
          <li className='navbar__list-item'>
            <FontAwesomeIcon
              className='navbar__list-icon'
              icon={faQuestionCircle}
              size='lg'
            />
            <a href='#' className='navbar__link'>
              Help
            </a>
          </li>
          <li className='navbar__list-item'>
            <FontAwesomeIcon
              className='navbar__list-icon'
              icon={faMoneyCheck}
              size='lg'
            />
            <a href='#' className='navbar__link'>
              Payment
            </a>
          </li>
          <li className='navbar__list-item'>
            <FontAwesomeIcon
              className='navbar__list-icon'
              icon={faCog}
              size='lg'
            />
            <a href='#' className='navbar__link'>
              Settings
            </a>
          </li>
        </ul>

        <div
          className='navbar__user'
          onClick={() => setAccountModalActive(!accountModalActive)}
        >
          <FontAwesomeIcon
            className='navbar__user-icon'
            icon={faUserCircle}
            size='lg'
          />
        </div>
      </div>
    </div>
  )
}

export default Navbar
