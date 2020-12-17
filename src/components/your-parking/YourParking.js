import BookedParking from './BookedParking'
import Map from '../map/Map'

const YourParking = ({ 
  item, 
  setSelectedParking, 
  bookingConfirmed, 
  setBookingConfirmed 
}) => {
  return (
    <div style={{ display: 'flex' }}>
        <Map></Map>
        <BookedParking
            item={item}
            setSelectedParking={setSelectedParking}
            bookingConfirmed={bookingConfirmed}
            setBookingConfirmed={setBookingConfirmed}
        ></BookedParking>
    </div>
  )
}

export default YourParking
