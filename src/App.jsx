import React from 'react'
import Header from './components/Header';
import { BrowserRouter, Routes,Route } from 'react-router'
import Home from './components/pages/Home.jsx'
import Product from './components/pages/Product.jsx'
import About from './components/pages/About.jsx'
import Cart from './components/pages/Cart.jsx';
import Footer from './components/Footer.jsx';
import Login from './components/pages/Login.jsx';
import SignUp from './components/pages/SignUp.jsx';
import AdminLogin from './components/AdminPages/AdminLogin.jsx';
import AdminSignup from './components/AdminPages/AdminSignup.jsx';
function App() {
  return (
    <div>
      <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="product" element={<Product/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/admin-login" element={<AdminLogin/>}/>
      <Route path="/admin-signup" element={<AdminSignup/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
