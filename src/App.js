import './App.css';
import Menu from './Components/Menu';
import Home from './Components/Home';
import { Route,Routes } from 'react-router-dom';
import Register from './Components/Register';
import Notification from './Components/Notification'
import Login from './Components/Login';
import { useNavigate } from 'react-router-dom';

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


  </Routes>
    </div>
  );
}

export default App;
