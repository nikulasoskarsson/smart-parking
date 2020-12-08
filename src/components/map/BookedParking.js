import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMapMarkerAlt,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

const BookedParking = ({ item, setSelectedParking }) => {
  return (
    <div>
      <div
        className='search__location-item'
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
          </div>
          <div className='search__location-item-right'>
            <h3 className='search__location-item-rate'>
              DKK {' ' + item.hourlyRate} / hour
            </h3>
            <FontAwesomeIcon
              className='search__location-item-icon search__location-item-icon-chevron'
              icon={faChevronRight}
              size='lg'
            />
          </div>
        </div>
      </div>
      <div className='booked'>
        <p className='booked-text text-align-center'>
          You can open your booked parking space with our app
        </p>
        <div className='booked__button-container'></div>
      </div>
    </div>
  )
}

export default BookedParking
