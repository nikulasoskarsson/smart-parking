import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faParking,
  faMapMarkerAlt,
  faEllipsisH,
  faHistory,
} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'


const MobileNavbar = () => {

  return (
    <div className='mobile-navbar'>
        <ul className='mobile-navbar__list'>
        <NavLink 
            className='mobile-navbar__list-item'
            to='/'
            exact
          >
            <FontAwesomeIcon
              className='mobile-navbar__list-icon'
              icon={faMapMarkerAlt}
              size='lg'
            />
            <span className='mobile-navbar__link'>
              Map
            </span>
          </NavLink>
          <NavLink 
            className='mobile-navbar__list-item'
            to='/your-parking'
          >
            <FontAwesomeIcon
              className='mobile-navbar__list-icon'
              icon={faParking}
              size='lg'
            />
            <span className='mobile-navbar__link'>
              Your Parking
            </span>
          </NavLink>
          <NavLink 
            className='mobile-navbar__list-item'
            to='/history'
          >
            <FontAwesomeIcon
              className='mobile-navbar__list-icon'
              icon={faHistory}
              size='lg'
            />
            <span className='mobile-navbar__link'>
              History
            </span>
          </NavLink>
          <NavLink
                to='/account'
                className='mobile-navbar__list-item'
            >
                <FontAwesomeIcon
                    className='mobile-navbar__list-icon'
                    icon={faEllipsisH}
                    size='lg'
                />
                <span className='mobile-navbar__link'>
                    More
                </span>
            </NavLink>
        </ul>
    </div>
  )
}

export default MobileNavbar
