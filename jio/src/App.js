import React,{useState} from 'react';
import './App.css';
import { Routes, Route} from "react-router-dom";
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Signup from "./components/Login/Signup"
import Cart from './components/Cart/Cart';
import Landingpage from './components/Landingpage/Landingpage';
import SideNavbar from './components/sideNavbar/SideNavbar';
import RequiredAuth from "./components/utils/RequiredAuth"
import Account from './components/Login/Account';
import { MainProduct } from './components/fruit/MainProduct';
import { SingleProduct } from './components/fruit/SingleProduct';


function App() {
  const [sidebarVisible, setsidebarVisible] = useState(false)
  const [pincode, setPincode] = useState(400020)
  const [pinDetails, setPinDetials] = useState("")

  return (
    <>
    <div style={{position:"-webkit-sticky" ,top:"0"}}>
    <Navbar setsidebarVisible={setsidebarVisible} pincode={pincode}/>
    <SideNavbar sidebarVisible={sidebarVisible} setsidebarVisible={setsidebarVisible}/>
    </div>
    <Routes>
       <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<RequiredAuth><Cart /></RequiredAuth>} />
        <Route path="/account" element={<RequiredAuth><Account /></RequiredAuth>} />

        <Route path="/product/:category" element={<MainProduct/>}/>
        <Route path="/product/:name/:id" element={<SingleProduct pinDetails={pinDetails} setPinDetials={setPinDetials} pincode={pincode} setPincode={setPincode}/>}/>
        <Route path="/cart" element={<Cart />} />


    </Routes>
      <Footer/>
    </>
  );
}

export default App;
