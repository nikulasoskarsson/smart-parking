import React from 'react'
import GoogleMap from './googlemap.JPG'

const Map = () => {
  return (
    <div className='map'>
      <img className='map__img' src={GoogleMap} alt='' />

      <div className='map__button-container hidden-tab'>
        <div className='map__button'>Map</div>
        <div className='map__button'>Satilite</div>
      </div>
    </div>
  )
}

export default Map
