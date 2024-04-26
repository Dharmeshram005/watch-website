import './App.css';
import { Navbar } from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Brand } from './pages/Brands';
function App() {
  return(
  <div className='App'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Brands" element={<Brand/>}/>
      </Routes>
  </div>
  );
}

export default App;
