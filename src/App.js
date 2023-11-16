import './App.css';
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";


import NavBar from './NavBar/NavBar';
import LandingPage from './LandingPage/LandingPage';
import Order from './Order/Order';
import Discover from './Discover/Discover';
import ModelCar from './Models Car/ModelCar';
import Maybach from './Maybach/Maybach';
import AMG from './AMG/AMG';
import Discover2 from './Discover/Discover2';
import Discover3 from './Discover/Discover3';
import Discover4 from './Discover/Discover4';
import Discover5 from './Discover/Discover5';






function App() {
  return (
    <div>
      <NavBar/>

      <Routes>

      <Route path="/" element={<LandingPage/>}/>

      <Route path="/Order" element={<Order/>}/>


      <Route path="/Mercedes" element={<ModelCar/>} />

      <Route path="/Maybach" element={<Maybach/>}/>

      <Route path='/AMG' element={<AMG/>}/>

      <Route path="/Discover" element={<Discover/>} />

      <Route path='/Discover/Maybach/3D' element={<Discover2/>}/>

      <Route path='/Discover/GLS/3D' element={<Discover3/>}/>

      <Route path='/Discover/G-Class/3D' element={<Discover4/>}/>

      <Route path='/Discover/AMG/3D' element={<Discover5/>}/>

      <Route path='/Order' element={<Order/>}/>




      </Routes>
      </div>
  );
}

export default App;
