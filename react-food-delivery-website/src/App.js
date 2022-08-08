import React from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home.jsx'
import {Routes,  Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
          <Route  path="/" element={<Home/>} />                
      </Routes>
    </div>
  )
}

export default App
