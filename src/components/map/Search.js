import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSearch,
  faTimes,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import SelectableLocationList from './SelectableLocationList'
import BookedParking from './BookedParking'

const Search = ({ isAuthenticated }) => {
  const [inputText, setInputText] = useState('')
  const [selectedParking, setSelectedParking] = useState(false)
  const [isBooked, setIsBooked] = useState(false)

  const [data] = useState([
    {
      estimatedTravelTime: {
        unit: 'minutes',
        time: 14,
      },
      streetName: 'Streetname 45',
      zipCode: '2400 københavn NV',
      hourlyRate: '2.00',
    },
    {
      estimatedTravelTime: {
        unit: 'minutes',
        time: 14,
      },
      streetName: 'Streetname 45',
      zipCode: '2400 københavn NV',
      hourlyRate: '2.00',
    },
    {
      estimatedTravelTime: {
        unit: 'minutes',
        time: 14,
      },
      streetName: 'Streetname 45',
      zipCode: '2400 københavn NV',
      hourlyRate: '2.00',
    },
    {
      estimatedTravelTime: {
        unit: 'minutes',
        time: 14,
      },
      streetName: 'Streetname 45',
      zipCode: '2400 københavn NV',
      hourlyRate: '2.00',
    },
  ])

  return (
    <div className='search'>
      <div className='search__search-content'>
        {!isBooked ? (
          <>
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
          </>
        ) : (
          <>
            <h3 className='search__heading heading-secondary padding-tb-2'>
              Booked parking
            </h3>
          </>
        )}
      </div>
      {!isBooked ? (
        <SelectableLocationList
          selectedParking={selectedParking}
          setSelectedParking={setSelectedParking}
          data={data}
          isAuthenticated={isAuthenticated}
          setIsBooked={setIsBooked}
        />
      ) : (
        <BookedParking
          item={selectedParking}
          setSelectedParking={setSelectedParking}
        />
      )}
    </div>
  )
}

export default Search
