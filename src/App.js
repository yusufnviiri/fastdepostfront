import './App.css';
import Menu from './Components/Menu';
import Home from './Components/Home';
import { Route,Routes } from 'react-router-dom';
import Register from './Components/Register';
import Notification from './Components/Notification'
import Login from './Components/Login';
import Deposit from './Components/Deposit';
import Deposits from './Components/Deposits';
import Withdraws from './Components/Withdraws';
import Withdraw from './Components/Withdraw';
import FetchExcelData from './Components/FetchExcelData';
function App() {
  return (


    <div className="App">

            <Notification />

      <Menu/>
      {/* <Register/> */}
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/fetchdata' element={<FetchExcelData/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/deposit' element={<Deposit/>}/>
    <Route path='/deposits' element={<Deposits/>}/>
    <Route path='/withdraw' element={<Withdraw/>}/>
    <Route path='/withdraws' element={<Withdraws/>}/>
  </Routes>
    </div>
  );
}

export default App;
