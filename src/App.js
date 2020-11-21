import './App.scss';
import SignUp from './components/auth/SignUp';
import Navbar from './components/Layout/Navbar';

function App() {
  return (
    <div className="App" style={{minHeight:'100vh', backgroundColor:'red'}}>
      <Navbar />
      <SignUp />
    </div>
  );
}

export default App;
