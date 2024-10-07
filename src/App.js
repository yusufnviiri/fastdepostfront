import './App.css';
import Menu from './Components/Menu';
import Home from './Components/Home';
import { Route,Routes } from 'react-router-dom';
import Register from './Components/Register';
import Notification from './Components/Notification'
import Login from './Components/Login';
import Deposit from './Components/Deposit';
import Deposits from './Components/Deposits';
function App() {
  return (


    <div className="App">

            <Notification />

      <Menu/>
      {/* <Register/> */}
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/deposit' element={<Deposit/>}/>
    <Route path='/deposits' element={<Deposits/>}/>

  </Routes>
    </div>
  );
}

export default App;
