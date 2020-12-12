import { useState, useEffect } from 'react'
import './App.scss'
import SignUp from './components/auth/SignUp'
import Navbar from './components/Layout/Navbar'
import Map from './components/map/Map'
import Search from './components/map/Search'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true)

  // testing
  useEffect(() => {
    console.log('use effect ran', isAuthenticated)
  }, [isAuthenticated])
  return (
    <Router>
      <div
        className='App'
        style={{ minHeight: '100vh', backgroundColor: 'red' }}
      >
        <Navbar />
        <Switch>
          <Route exact={true} path='/'>
            {!isAuthenticated ? (
              <SignUp
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
              />
            ) : (
              <div style={{ display: 'flex' }}>
                <Map />
                <Search isAuthenticated={isAuthenticated} />
              </div>
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
