import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faParking,
  faCreditCard,
  faSignOutAlt,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import User from './cat.png'

const AccountModal = () => {
  return (
    <div className='account'>
      <h1 className='account__heading text-align-center margin-top-4'>
        Account
      </h1>
      <div className='account__person'>
        <img src={User} alt='' className='account__person-img' />
        <div className='account__person-name'>Nikulás Óksarsson</div>
      </div>

      <ul className='account__menu'>
        <li className='account__menu-item'>
          <FontAwesomeIcon
            className='account__menu-item-icon'
            icon={faCreditCard}
            size='lg'
          />
          <a href='' className='account__menu-item-link'>
            Payment Information
          </a>
          <FontAwesomeIcon
            className='account__menu-item-chevron'
            icon={faChevronRight}
            size='lg'
          />
        </li>

        <li className='account__menu-item'>
          <FontAwesomeIcon
            className='account__menu-item-icon'
            icon={faSignOutAlt}
            size='lg'
          />
          <a href='' className='account__menu-item-link'>
            Log Out
          </a>
        </li>
      </ul>
    </div>
  )
}

export default AccountModal
