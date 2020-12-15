import { useState, useEffect } from 'react'
import './App.scss'
import SignUp from './components/auth/SignUp'
import Navbar from './components/Layout/Navbar'
import Map from './components/map/Map'
import Search from './components/map/Search'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import AccountModal from './components/auth/AccountModal'
import BottomTabNavigation from './components/Layout/BottomTabNavigation'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const [accountModalActive, setAccountModalActive] = useState(false)

  // testing
  useEffect(() => {
    console.log('use effect ran', isAuthenticated)
  }, [isAuthenticated])
  return (
    <Router>
      <div
        className='App app-container'
        style={{ minHeight: '100vh', backgroundColor: 'red' }}
      >
        <Navbar
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
          <Route exact={true} path='/'>
            {!isAuthenticated ? (
              <SignUp
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
              />
            ) : (
              <div className='home-container'>
                <Map />
                <Search isAuthenticated={isAuthenticated} />
              </div>
            )}
          </Route>
        </Switch>
      </div>
      <BottomTabNavigation />
    </Router>
  )
}

export default App
