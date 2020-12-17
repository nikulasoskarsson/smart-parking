import { useState} from 'react'
import './App.scss'
import SignUp from './components/auth/SignUp'
import Login from './components/auth/Login'
import Navbar from './components/Layout/Navbar'
import MobileNavbar from './components/Layout/MonileNavbar'
import Map from './components/map/Map'
import Search from './components/map/Search'
import YourParking from './components/your-parking/YourParking'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AccountModal from './components/auth/AccountModal'
import BottomTabNavigation from './components/Layout/BottomTabNavigation'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [selectedParking, setSelectedParking] = useState(false)
  const [accountModalActive, setAccountModalActive] = useState(false)
  const [bookingConfirmed, setBookingConfirmed] = useState(false)

  return (
    <Router>
      <div
        className='App'
        style={{ minHeight: '100vh', }} 
      >
        <Navbar
          accountModalActive={accountModalActive}
          setAccountModalActive={setAccountModalActive}
        />
        <MobileNavbar
          accountModalActive={accountModalActive}
          setAccountModalActive={setAccountModalActive}
        />
        {accountModalActive && (
          <AccountModal
            accountModalActive={accountModalActive}
            setAccountModalActive={setAccountModalActive}
          />
        )}
        <Switch>
          <Route path='/account'>
            <AccountModal
              accountModalActive={accountModalActive}
              setAccountModalActive={setAccountModalActive}
            />
          </Route>
          <Route path='/login'>
            <Login
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
              selectedParking = {selectedParking}
              setSelectedParking ={setSelectedParking}
            />
          </Route>
          <Route path='/signup'>
            <SignUp
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
            />
          </Route>
          <Route path='/your-parking'>
            <div className='content'>
              <YourParking
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
                item={selectedParking}
                setSelectedParking={selectedParking}
                bookingConfirmed={bookingConfirmed}
                setBookingConfirmed={setBookingConfirmed}
              />
            </div>
          </Route>
          <Route path='/'>
            <div className='content'>
              <Map />
              <Search 
                isAuthenticated={isAuthenticated}
                selectedParking={selectedParking}
                setSelectedParking={setSelectedParking}
                bookingConfirmed={bookingConfirmed}
                setBookingConfirmed={setBookingConfirmed}
              />
            </div>
          </Route>
        </Switch>
      </div>
      <BottomTabNavigation />
    </Router>
  )
}

export default App
