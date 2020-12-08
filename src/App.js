import './App.scss'
import SignUp from './components/auth/SignUp'
import Navbar from './components/Layout/Navbar'
import Map from './components/map/Map'
import Search from './components/map/Search'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className='App' style={{ minHeight: '100vh', backgroundColor: 'red' }}>
      <Navbar />
      {/* <SignUp /> */}
      <div style={{ display: 'flex' }}>
        <Map />
        <Search />
      </div>
    </div>
  )
}

export default App
