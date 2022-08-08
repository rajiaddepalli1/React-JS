import React from 'react'
import millify from 'millify'
import tw from "tailwind-styled-components"

const Coin = ({coin}) => {
  return (
    <CoinBox>
            <Header>
              <div><img src= {coin.image}  width={30} height={30}/></div>
              <div key={coin.id} >{coin.symbol} </div>
              <div className='font-semibold'>{coin.name}</div>
            </Header>
            <Body>
              <div className='flex gap-4'>
                Current Price: <span className='font-medium'>{millify(coin.current_price)}</span>
              </div>
              <div className='flex gap-4'>
                Market Cap: <span className='font-medium'>{millify(coin.market_cap)}</span>
              </div>
              <div className='flex gap-4'>
                Total Volume: <span className='font-medium'>{millify(coin.total_volume)}</span>
              </div>
              <div className='flex gap-4'>
                Price Change 24Hrs: <span className='font-medium'>{millify(coin.price_change_24h)}</span>
              </div>
              <div className='flex gap-4'>
                Percentage Change 24Hrs:  <span className='font-medium'>{millify(coin.price_change_percentage_24h)}</span>
              </div>
            </Body>
    </CoinBox>
  )
}

export default Coin

const CoinBox = tw.div`
  flex flex-col gap-2 w-60 h-52 border-2 items-center justify-center cursor-pointer 
`;

const Header = tw.div`
    w-full flex justify-between px-4
`;

const Body = tw.div`
    flex flex-col items-start gap-2 mt-2
`;