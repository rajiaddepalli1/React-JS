import React from 'react'
import millify from 'millify'
import tw from "tailwind-styled-components"

const Exchange = ({exchange}) => {
  return (
    <ExchangeBox>
            <Header>
              <div><img src= {exchange.image}  width={30} height={30}/></div>
              <div key={exchange.id} >{exchange.id} </div>
              <div className='font-semibold'>{exchange.country}</div>
            </Header>
            <Body>
              <div className='flex gap-4'>
                Name: <span className='font-medium'>{exchange.name}</span>
              </div>
              <div className='flex gap-4'>
               Year Established: <span className='font-medium'>{(exchange.year_established)}</span>
              </div>
              <div className='flex gap-4'>
               Trust Score Rank: <span className='font-medium'>{(exchange.trust_score_rank)}</span>
              </div>
              <div className='flex gap-4'>
               Trade Volume 24H BTC: <span className='font-medium'>{millify(exchange.trade_volume_24h_btc)}</span>
              </div>
              <div className='flex gap-4'>
              Trade (V) 24H BTC Nzd:  <span className='font-medium'>{millify(exchange.trade_volume_24h_btc_normalized)}</span>
              </div>
            </Body>
    </ExchangeBox>
  )
}

export default Exchange

const ExchangeBox = tw.div`
  flex flex-col gap-2 w-60 h-52 border-2 items-center justify-center
`;

const Header = tw.div`
    w-full flex justify-between px-4
`;

const Body = tw.div`
    flex flex-col items-start gap-2 mt-2
`;