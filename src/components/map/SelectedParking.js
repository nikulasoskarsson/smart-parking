import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faMapMarkerAlt,
  faClock,
} from '@fortawesome/free-solid-svg-icons'

const SelectedParking = ({ item, setIsBooked, isAuthenticated }) => {
  return (
    <div>
      <div className='search__location-item padding-bottom-2'>
        <div className='search__location-item-content row padding-bottom-4'>
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
            <p className='search__location-item-location margin-bottom-2'>
              {item.zipCode}
            </p>

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
        <div
          className='button-gray margin-0-auto'
          onClick={() => setIsBooked(true)}
          style={
            isAuthenticated ? { background: '#82bd50', color: '#fff' } : {}
          }
        >
          Book Parking Space
        </div>
        {!isAuthenticated && (
          <p className='login-text text-align-center margin-top-2 margin-bottom-2'>
            Please <a href='#'>log in</a> to book a parking space
          </p>
        )}
      </div>
    </div>
  )
}

export default SelectedParking
