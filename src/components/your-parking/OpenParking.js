import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft} from '@fortawesome/free-solid-svg-icons'


const OpenParking = ({ isopen, setIsopen }) => {

  return (
    <div className={isopen ? ('open display') : ('open')}>
        <div 
            className='open__navbar'
            onClick={() => setIsopen(!isopen)}
        >
            <FontAwesomeIcon
                className='open__navbar-icon'
                icon={faChevronLeft}
                size='lg'
            />
            <span>Back</span>
        </div>
        <div className='open__qr-container'>
            <h3>Open your parking space</h3>
            <img src='' alt='qr'></img>
            <p>Bring the code close to the scanner</p>
        </div>
    </div>
  )
}

export default OpenParking
