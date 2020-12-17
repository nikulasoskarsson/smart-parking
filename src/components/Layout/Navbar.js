import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faParking,
  faQuestionCircle,
  faUserCircle,
  faMapMarkerAlt,
  faUser,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

const Navbar = ({
  accountModalActive,
  setAccountModalActive,
  item,
  setSelectedParking,
  isAuthenticated,
}) => {
  return (
    <div className='navbar'>
      <div className='navbar__logo'>
        <h3 className='navbar__logo-text'>
          <span className='orange'>SMART</span>
          <span className='green'>PARKING</span>
        </h3>
      </div>
      <ul className='navbar__list'>
        <NavLink className='navbar__list-item' to='/' exact>
          <FontAwesomeIcon
            className='navbar__list-icon'
            icon={faMapMarkerAlt}
            size='lg'
          />
          <span className='navbar__link'>Map</span>
        </NavLink>
        {isAuthenticated && (
          <NavLink
            className='navbar__list-item'
            to={'/your-parking'}
            onClick={() => {
              item = { item }
              setSelectedParking = { setSelectedParking }
            }}
          >
            <FontAwesomeIcon
              className='navbar__list-icon'
              icon={faParking}
              size='lg'
            />
            <span className='navbar__link'>Your Parking</span>
          </NavLink>
        )}

        <li className='navbar__list-item'>
          <FontAwesomeIcon
            className='navbar__list-icon'
            icon={faQuestionCircle}
            size='lg'
          />
          <span className='navbar__link'>Help</span>
        </li>
        {!isAuthenticated && (
          <>
            <NavLink to='/login' className='navbar__list-item'>
              <FontAwesomeIcon
                className='navbar__list-icon'
                icon={faUser}
                size='lg'
              />
              <span className='navbar__link'>Log in</span>
            </NavLink>

            <NavLink to='/signup' className='navbar__list-item'>
              <FontAwesomeIcon
                className='navbar__list-icon'
                icon={faUserPlus}
                size='lg'
              />
              <span className='navbar__link'>Sign up</span>
            </NavLink>
          </>
        )}
      </ul>
      {isAuthenticated && (
        <div
          className='navbar__user'
          onClick={() => setAccountModalActive(!accountModalActive)}
        >
          <FontAwesomeIcon
            className='navbar__user-icon'
            icon={faUserCircle}
            size='lg'
          />

          <span className='navbar__user-name'>Nikulás Óskarsson</span>
        </div>
      )}
    </div>
  )
}

export default Navbar
