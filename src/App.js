import './App.scss'
import SignUp from './components/auth/SignUp'
import Navbar from './components/Layout/Navbar'
import Search from './components/map/Search'

function App() {
  return (
    <div className='App' style={{ minHeight: '100vh', backgroundColor: 'red' }}>
      <Navbar />
      {/* <SignUp /> */}
      <Search />
    </div>
  )
}

export default App
