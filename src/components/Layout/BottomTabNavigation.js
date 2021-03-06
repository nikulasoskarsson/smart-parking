import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMapMarkerAlt,
  faCar,
  faHistory,
  faCog,
} from '@fortawesome/free-solid-svg-icons'

const BottomTabNavigation = () => {
  return (
    <div className='bottom-nav'>
      <ul className='bottom-nav__list'>
        <li className='bottom-nav__list-item'>
          <FontAwesomeIcon
            className='bottom-nav-icon  bottom-nav-icon-active'
            icon={faMapMarkerAlt}
            size='lg'
          />
          <div className='bottom-nav-link'>Map</div>
        </li>
        <li className='bottom-nav__list-item'>
          <FontAwesomeIcon className='bottom-nav-icon' icon={faCar} size='lg' />
          <div className='bottom-nav-link'>Your parking</div>
        </li>
        <li className='bottom-nav__list-item'>
          <FontAwesomeIcon
            className='bottom-nav-icon'
            icon={faHistory}
            size='lg'
          />
          <div className='bottom-nav-link'>History</div>
        </li>
        <li className='bottom-nav__list-item'>
          <FontAwesomeIcon className='bottom-nav-icon' icon={faCog} size='lg' />
          <div className='bottom-nav-link'>More</div>
        </li>
      </ul>
    </div>
  )
}

export default BottomTabNavigation
