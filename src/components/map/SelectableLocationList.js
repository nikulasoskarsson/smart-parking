import React, { useState } from 'react'
import SelectableLocationItem from './SelectableLocationItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import SelectedParking from './SelectedParking'

const SelectableLocationList = ({
  selectedParking,
  setSelectedParking,
  data,
}) => {
  return (
    <div className='search__locations margin-top-2'>
      {selectedParking ? (
        <SelectedParking item={selectedParking} />
      ) : (
        <>
          {data.length ? (
            <>
              {data.map((item) => (
                <SelectableLocationItem
                  item={item}
                  setSelectedParking={setSelectedParking}
                />
              ))}
            </>
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  )
}

export default SelectableLocationList
