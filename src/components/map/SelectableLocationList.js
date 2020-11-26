import React, { useState } from 'react'
import SelectableLocationItem from './SelectableLocationItem'

const SelectableLocationList = () => {
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
    <div className='search__locations margin-top-2'>
      {data.length ? (
        <>
          {data.map((item) => (
            <SelectableLocationItem item={item} />
          ))}
        </>
      ) : (
        <></>
      )}
    </div>
  )
}

export default SelectableLocationList
