import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons'
import AppleLogo from './apple.png'
import PlaystoreLogo from './playstore.png'

const BookedParking = ({ item, setSelectedParking }) => {
  return (
    <div>
      <div
        className='search__location-item padding-bottom-2'
        onClick={() => setSelectedParking(item)}
      >
        <div className='search__location-item-content row'>
          <div className='search__location-item-left'>
            <div className='row-align-center'>
              <FontAwesomeIcon
                className='search__location-item-icon search__location-item-icon-marker'
                icon={faMapMarkerAlt}
                size='lg'
              />
              <h3 className='search__location-item-time margin-bottom-2'>
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
            <p className='search__location-item-location'>{item.streetName}</p>
            <p className='search__location-item-location'>{item.zipCode}</p>

            <FontAwesomeIcon
              className='search__location-item-icon search__location-item-icon-clock'
              icon={faClock}
              size='lg'
            />
            <div className='search__location-item-button button-gray'>
              Select a time
            </div>
          </div>
          <div className='search__location-item-right'>
            <h3 className='search__location-item-rate'>
              DKK {' ' + item.hourlyRate} / hour
            </h3>
          </div>
        </div>
      </div>
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
              <p className='booked__button-text-sm'>Download on the</p>
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
    </div>
  )
}

export default BookedParking
