import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMapMarkerAlt,
  faClock,
  faCheckCircle,
  faPen,
} from '@fortawesome/free-solid-svg-icons'
import AppleLogo from '../map/apple.png'
import PlaystoreLogo from '../map/playstore.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const BookedParking = ({
  item,
  setSelectedParking,
  bookingConfirmed,
  setBookingConfirmed,
}) => {
  const [success, setSuccess] = useState('')

  return (
    <div className='search'>
      <h3 className='booked-search__heading heading-secondary padding-tb-2'>
        Booked parking
      </h3>
      {item && bookingConfirmed ? (
        <div>
          <div
            className='search__location-item padding-bottom-2'
            onClick={() => ''}
          >
            <div className='search__location-item-content row'>
              <div className='search__location-item-left'>
                <div className='row-align-center'>
                  <FontAwesomeIcon
                    className='search__location-item-icon search__location-item-icon-marker'
                    icon={faMapMarkerAlt}
                    size='lg'
                  />
                  <h3 className='search__location-item-time'>
                    A{' '}
                    {item.estimatedTravelTime.time +
                      ' ' +
                      item.estimatedTravelTime.unit ===
                    'minutes'
                      ? 'mins'
                      : 'hours'}{' '}
                    away
                  </h3>
                </div>
                <p className='search__location-item-location'>
                  {item.streetName}
                </p>
                <p className='search__location-item-location margin-bottom-2'>
                  {item.zipCode}
                </p>

                <FontAwesomeIcon
                  className='search__location-item-icon search__location-item-icon-clock'
                  icon={faClock}
                  size='lg'
                />
                <div className='search__location-item-button button-gray'>
                  11:15 / Tus 26.05
                  <span>
                    <FontAwesomeIcon
                      className='edit-icon'
                      icon={faPen}
                      size='lg'
                    />
                  </span>
                </div>
              </div>
              <div className='search__location-item-right-booked'>
                <h3 className='search__location-item-rate'>
                  DKK {' ' + item.hourlyRate} / hour
                </h3>
              </div>
            </div>
          </div>
          <Link className='button-primary margin-0-auto hidden-large'>
            Open parking space
          </Link>
          <div className='booked'>
            <p className='booked-text text-align-center margin-top-2'>
              You can open your booked parking space with our app
            </p>
            <div className='booked__button-container margin-top-2'>
              <div className='booked__button'>
                <div className='booked__button-left'>
                  <img
                    src={AppleLogo}
                    alt='Apple logo'
                    className='booked__button-img'
                  />
                </div>
                <div className='booked__button-right'>
                  <p className='boMapMarkerAltoked__button-text-sm'>
                    Download on the
                  </p>
                  <p className='booked__button-text-lg'>App store</p>
                </div>
              </div>

              <div className='booked__button'>
                <div className='booked__button-left'>
                  <img
                    src={PlaystoreLogo}
                    alt='Apple logo'
                    className='booked__button-img'
                  />
                </div>
                <div className='booked__button-right'>
                  <p className='booked__button-text-sm'>Get in on</p>
                  <p className='booked__button-text-lg'>Play store</p>
                </div>
              </div>
            </div>
          </div>
          {success === '' ? (
            <div
              className='confirmation-container'
              onClick={() => setSuccess(false)}
            >
              <div className='confirmation-container-wrap'>
                <div className='success-container'>
                  <FontAwesomeIcon
                    className='success-container-icon'
                    icon={faCheckCircle}
                    size='lg'
                  />
                  <p className='success-container-text'>Success</p>
                </div>
                <p className='confirmation-container-wrap-text'>
                  You succesfully booked a parking space
                </p>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      ) : (
        <div>
          <div className='search__location-item padding-bottom-2'>
            <p className='booked-text-sm'>No active booking..</p>
            <p className='booked-text-lg'>
              See available parking spaces on the
              <Link to='/'>
                Map
                <FontAwesomeIcon className='' icon={faMapMarkerAlt} size='lg' />
              </Link>
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default BookedParking
