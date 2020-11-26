import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMapMarkerAlt,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

const SelectableLocationItem = ({ item }) => {
  return (
    <div className='search__location-item'>
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
  )
}

export default SelectableLocationItem
