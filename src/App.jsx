
import './App.css'
import React from 'react'
import {  Routes, Route } from 'react-router-dom'
import Cart from './pages/Cart'
import Home from './pages/Home'

import NavBar from './components/NavBar'
function App() {

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
    </>
  )
}

export default App
