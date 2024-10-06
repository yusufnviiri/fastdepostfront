import './App.css';
import Menu from './Components/Menu';
import Home from './Components/Home';
import { Route,Routes } from 'react-router-dom';
import Register from './Components/Register';
import Notification from './Components/Notification'

function App() {
  return (
    <div className="App">
            <Notification />

      <Menu/>
      {/* <Register/> */}
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/register' element={<Register/>}/>

  </Routes>
    </div>
  );
}

export default App;
