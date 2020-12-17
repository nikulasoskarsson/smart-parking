import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSearch,
  faTimes,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import SelectableLocationList from './SelectableLocationList'

const Search = ({ 
  isAuthenticated,
  setSelectedParking,
  selectedParking,
  bookingConfirmed,
  setBookingConfirmed
}) => {
  const [inputText, setInputText] = useState('')
  const [data] = useState([
    {
      estimatedTravelTime: {
        unit: 'minutes',
        time: 14,
      },
      streetName: 'Streetname 45',
      zipCode: '2400 københavn NV',
      hourlyRate: '2.00',
      id: 1
    },
    {
      estimatedTravelTime: {
        unit: 'minutes',
        time: 14,
      },
      streetName: 'Streetname 45',
      zipCode: '2400 københavn NV',
      hourlyRate: '2.00',
      id: 2
    },
    {
      estimatedTravelTime: {
        unit: 'minutes',
        time: 14,
      },
      streetName: 'Streetname 45',
      zipCode: '2400 københavn NV',
      hourlyRate: '2.00',
      id: 3
    },
    {
      estimatedTravelTime: {
        unit: 'minutes',
        time: 14,
      },
      streetName: 'Streetname 45',
      zipCode: '2400 københavn NV',
      hourlyRate: '2.00',
      id: 4
    },
  ])
  
  return (
    <div className='search'>
      <div className='search__search-content'>
        <h3 className='search__heading heading-secondary padding-tb-2'>
          Search for your destination or select one near you
        </h3>
        {!selectedParking ? (
          <div className='search__searchbar'>
            <FontAwesomeIcon
              className='search__searchbar-icon search__searchbar-icon-search'
              icon={faSearch}
              size='lg'
            />

            <input
              type='text'
              className='search__searchbar-input'
              placeholder='Search'
              onChange={(e) => setInputText(e.target.value)}
              value={inputText}
            />
            <FontAwesomeIcon
              className='search__searchbar-icon search__searchbar-icon-exit'
              icon={faTimes}
              size='lg'
              onClick={() => setInputText('')}
            />
          </div>
        ) : (
          <div
            style={{ display: 'flex' }}
            onClick={() => setSelectedParking(null)}
            className='search__back'
          >
            <FontAwesomeIcon
              icon={faChevronLeft}
              size='lg'
              className='search__back-icon'
            />
            <span className='search__back-text'>Back</span>
          </div>
        )}
      </div>
        <SelectableLocationList
          selectedParking={selectedParking}
          setSelectedParking={setSelectedParking}
          data={data}
          isAuthenticated={isAuthenticated}
          bookingConfirmed={bookingConfirmed}
          setBookingConfirmed={setBookingConfirmed}
        />
    </div>
  )
}

export default Search
