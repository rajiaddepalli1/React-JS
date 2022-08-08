import React from 'react'
import tw from "tailwind-styled-components"
import {Routes,  Route } from 'react-router-dom'
import {Home, HeaderMenu, Exchanges, CryptoCurrencies, CoinDetails, News} from './components'

const App = () => {

  return (
    <HomeWrapper>
        <HeaderMenu/>
        <Routes>
            <Route  path="/" element={<Home/>} />                
            <Route  path="/exchanges" element={<Exchanges/>} />
            <Route  path="/cryptocurrencies" element={<CryptoCurrencies/>} />
            <Route  path="/cryptodetails/:coinId" element={<CoinDetails/>} />
            <Route  path="/news" element={<News/>} />
        </Routes>
        
    </HomeWrapper>
  )
}

export default App

const HomeWrapper = tw.div`
   bg-white w-screen flex flex-col items-center justify-center box-border
`;
