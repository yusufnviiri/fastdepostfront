import './App.css';
import Home from './Components/Home';
import { Route,Routes } from 'react-router-dom';
import Register from './Components/Register';
import Notification from './Components/Notification'

function App() {
  return (
    <div className="App">
            <Notification />

      <Home/>
      <Register/>
  <Routes>
    {/* <Route path='/' element={<Home/>}/> */}
  </Routes>
    </div>
  );
}

export default App;
