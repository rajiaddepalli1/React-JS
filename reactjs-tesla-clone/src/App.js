import React from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import CarModelSpec from './components/shop/CarModelSpec';
import {Routes, Route} from 'react-router-dom';
import UserAccount from './pages/UserAccount';

const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/userAccount" element={<UserAccount/>} />
          <Route path="/carModelSpec/:selectedCarModel" element={<CarModelSpec/>} />
      </Routes>
    </div>

  )
}

export default App