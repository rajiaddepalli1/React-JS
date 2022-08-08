import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import {cryptoOptions, fetchData} from '../features/fetchData'
import tw from "tailwind-styled-components"

const CoinDetails = () => {

  const {coinId} = useParams();

  const [ coin, setCoin ] = useState({});
 
    const getCoin= async()=> {   
     const data = await fetchData(`https://coingecko.p.rapidapi.com/coins/${coinId}?localization=true&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=false`, cryptoOptions)
     setCoin(data);
    }
  
    useEffect ( () => {
      getCoin();
     }, []) 

      console.log(coin) 
      
  return (
    
    <CoinDetailsContainer>
        <CoinImage>
          <Header>
              <div className='text-small'>
                Symbol: <span className='font-semibold'>{coin.symbol}</span>
              </div>
              <div className='text-small'>
                Name: <span className='font-semibold'>{coin.name}</span>
              </div>
            </Header>
            <img src= {coin.image?.large}  />
        </CoinImage>
        <DataBoxCenter>
              <div className='flex gap-4 text-sm'>
                Id: <span className='font-medium'>{coin.id}</span>
              </div>
              <div className='flex gap-4 text-sm'>
                Market Cap Rank: <span className='font-medium'>{coin.market_cap_rank}</span>
              </div>
              <div className='flex gap-4 text-sm'>
               Liquidity Score: <span className='font-medium'>{coin.liquidity_score}</span>
              </div>
              <div className='flex gap-4 text-sm'>
               Price Change 24Hrs: <span className='font-medium'>{coin.market_data?.price_change_24h}</span>
              </div>
              <div className='flex gap-4 text-sm'>
              Price Change Percentage 24Hrs: <span className='font-medium'>{coin.market_data?.price_change_percentage_24h}</span>
              </div>
              <div className='flex gap-4 text-sm'>
              Price Change Percentage 7Days: <span className='font-medium'>{coin.market_data?.price_change_percentage_7d}</span>
              </div>
              <div className='flex gap-4 text-sm'>
              Price Change Percentage 14Days: <span className='font-medium'>{coin.market_data?.price_change_percentage_14d}</span>
              </div>
              <div className='flex gap-4 text-sm'>
              Price Change Percentage 30Days: <span className='font-medium'>{coin.market_data?.price_change_percentage_30d}</span>
              </div>
              <div className='flex gap-4 text-sm'>
              Price Change Percentage 60Days: <span className='font-medium'>{coin.market_data?.price_change_percentage_60d}</span>
              </div>
              <div className='flex gap-4 text-sm'>
              Price Change Percentage 200Days: <span className='font-medium'>{coin.market_data?.price_change_percentage_200d}</span>
              </div>
              <div className='flex gap-4 text-sm'>
               Market Cap Change 24Hrs: <span className='font-medium'>{coin.market_data?.market_cap_change_24h}</span>
              </div>
              <div className='flex gap-4 text-sm'>
               Price Change Percentage 1y: <span className='font-medium'>{coin.market_data?.price_change_percentage_1y}</span>
              </div>
        </DataBoxCenter>  
    </CoinDetailsContainer>
    
  )
}

export default CoinDetails

const CoinDetailsContainer = tw.div`
  mt-20 flex flex-col sm:flex-row w-3/4 h-full border-2 items-center justify-between p-4
`;
const CoinImage = tw.div`

`;
const DataBoxCenter = tw.div`
  grid  grid-cols-1  sm:grid-cols-2  gap-x-16 gap-y-1
`;

const Header = tw.div`
    w-full flex justify-between mb-4
`;
