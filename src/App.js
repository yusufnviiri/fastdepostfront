import './App.css';
import Home from './Components/Home';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      {/* <Home/> */}
  <Routes>
    <Route path='/' element={<Home/>}/>
  </Routes>
    </div>
  );
}

export default App;
