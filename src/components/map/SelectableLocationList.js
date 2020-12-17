import SelectableLocationItem from './SelectableLocationItem'
import SelectedParking from './SelectedParking'

const SelectableLocationList = ({
  selectedParking,
  setSelectedParking,
  data,
  isAuthenticated,
  bookingConfirmed,
  setBookingConfirmed
}) => {
  
  return (
    <div className='search__locations margin-top-2'>
      {selectedParking ? (
        <SelectedParking
          item={selectedParking}
          isAuthenticated={isAuthenticated}
          bookingConfirmed={bookingConfirmed}
          setBookingConfirmed={setBookingConfirmed}
        />
      ) : (
        <>
          {data.length ? (
            <>
              {data.map((item) => (
                <SelectableLocationItem
                  key={item.id}
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
