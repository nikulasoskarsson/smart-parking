import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import SelectableLocationList from './SelectableLocationList'

const Search = () => {
  const [inputText, setInputText] = useState('')

  return (
    <div className='search'>
      <div className='search__search-content'>
        <h3 className='search__heading heading-secondary padding-tb-2'>
          Search for your destination or select one near you
        </h3>
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
      </div>
      <SelectableLocationList />
    </div>
  )
}

export default Search
