import React, { Component } from 'react';
import { Routes,Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import Details from './Components/Details';
import Default from './Components/Default'
import Cart from './Components/Cart/Cart';
import Modal from './Components/Modal';

function App() {
  return (
   <React.Fragment>
    <Navbar />
    <Routes>
      <Route path='/' Component={ProductList}></Route>
      <Route path='/details' Component={Details}></Route>
      <Route path='/cart' Component={Cart}></Route>
      <Route path='*' Component={Default} />
    </Routes>
    <Modal />
    
   </React.Fragment>
  );
}

export default App;
