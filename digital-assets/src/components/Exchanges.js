import React,{useState, useEffect} from 'react'
import tw from "tailwind-styled-components"
import {cryptoOptions, fetchData} from '../features/fetchData'

import Exchange from './Exchange'

const Exchanges = () => {

  const [ exchanges, setExchanges ] = useState([]);
 
    const getExchanges = async()=> {   
     const data = await fetchData('https://coingecko.p.rapidapi.com/exchanges', cryptoOptions)
     setExchanges(data);
    }
  
    useEffect ( () => {
      getExchanges();
     }, []) 

     exchanges.map ( (exchange) => console.log(exchange.country) )

  return (
    <ExchangesContainer>
      { 
         exchanges.map ( (exchange) => (
              <Exchange exchange ={exchange} />
        ))
      }
    </ExchangesContainer>
  )
}

export default Exchanges

const ExchangesContainer = tw.div`
  w-full mt-20  px-8
  grid grid grid-cols-1  
  xl:grid-cols-5 lg:grid-cols-4 items-center justify-center 
   text-sm bg-white text-black gap-y-6 gap-x0
`;



    
  