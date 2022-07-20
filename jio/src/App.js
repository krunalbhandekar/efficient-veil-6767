import React,{useState} from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Cart from './components/Cart/Cart';
import Landingpage from './components/Landingpage/Landingpage';
import SideNavbar from './components/sideNavbar/SideNavbar';

function App() {
  const [sidebarVisible, setsidebarVisible] = useState(false)
  return (
    <>
    <div>
    <Navbar setsidebarVisible={setsidebarVisible}/>
    <SideNavbar sidebarVisible={sidebarVisible} setsidebarVisible={setsidebarVisible}/>
    </div>
    <Routes>
       <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
    </Routes>
      <Footer/>
    </>
  );
}

export default App;
