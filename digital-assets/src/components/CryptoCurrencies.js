import React,{useState, useEffect} from 'react'
import tw from "tailwind-styled-components"
import {cryptoOptions, fetchData} from '../features/fetchData'
import { Link } from 'react-router-dom';

import Coin from './Coin'

const CryptoCurrencies = () => {

  const [ cryptocurrencies, setCryptocurrencies ] = useState([]);
 
    const getCryptocurrencies = async()=> {   
     const data = await fetchData('https://coingecko.p.rapidapi.com/coins/markets?vs_currency=usd&page=1&per_page=100&order=market_cap_desc', cryptoOptions)
     setCryptocurrencies(data);
    }
  
    useEffect ( () => {
      getCryptocurrencies();
     }, []) 

     cryptocurrencies.map ( (coin) => console.log(coin.name) )

  return (
    <CoinsContainer>
      { 
         cryptocurrencies.map ( (coin) => (
          <Link to = { `/cryptodetails/${coin.id}`} >
              <Coin coin ={coin} />
           </Link>
        ))
      }
    </CoinsContainer>
  )
}

export default CryptoCurrencies

const CoinsContainer = tw.div`
  w-full mt-20  px-8
  grid grid-cols-1  
  xl:grid-cols-5 lg:grid-cols-4 items-center justify-center 
   text-sm bg-white text-black gap-y-6 gap-x0
   
`;



    
  