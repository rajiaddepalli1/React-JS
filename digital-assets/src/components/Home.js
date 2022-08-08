import React, {useEffect, useState} from 'react'
import tw from "tailwind-styled-components"
import {cryptoOptions, fetchData, newsOptions, fetchNews} from '../features/fetchData'
import { Link } from 'react-router-dom';
import {Coin, News} from '.'

const Home = () => {
 
    const [ cryptocurrencies, setCryptocurrencies ] = useState([]);
    const [ news, setNews ] = useState([]);

      const getCryptocurrencies = async()=> {   
       const data = await fetchData('https://coingecko.p.rapidapi.com/coins/markets?vs_currency=usd&page=1&per_page=100&order=market_cap_desc', cryptoOptions)
       setCryptocurrencies(data);
      }
      const getNews = async()=> {   
        const data = await fetchNews('https://bing-news-search1.p.rapidapi.com/news/search?q=coins&freshness=Day&textFormat=Raw&safeSearch=Off', newsOptions)
         setNews(data);
       }
      useEffect ( () => {
        getCryptocurrencies();
        getNews();
       }, []) 
       
     const filteredCryptocurrencies =  cryptocurrencies.slice(0,4);

   //news.value?.map( (article) => console.log(article.name))
     
  return (
    <HomeContainer>
      <HeroSection>
          <CoinsContainer>
            { 
              filteredCryptocurrencies.map ( (coin) => (
                <Link to = { `/cryptodetails/${coin.id}`} >
                  <Coin coin ={coin} />
                </Link>
                ))
            }
      
        </CoinsContainer>
        <ImageContainer>
          <img src="/images/home_bg_coin.jpg" />
          <h1 className='text-4xl'>Crypto Currencies Market Cap Change In The Last 24 Hours</h1>
        </ImageContainer> 
      </HeroSection>
      <h1 className='mt-16 text-2xl'>Latest Crypto Currency News</h1>
       <NewsContainer>
        { 
              news.value?.map( (article)  => (   
                <a href= { article.url} target="_blank" >      
                  <News article ={article} />
                </a>
                ))
            }
        </NewsContainer>
    </HomeContainer>
  )
}

export default Home

const HomeContainer = tw.div`
 flex flex-col w-full h-full px-10
`;

const HeroSection = tw.div`
  flex flex-row w-full h-full mt-20 
`;
const CoinsContainer = tw.div`
  w-1/2  
  grid grid-cols-1 lg:grid-cols-2
  xl:grid-cols-2 items-center justify-center 
   text-sm bg-white text-black gap-y-6 gap-x-0
  
`;

const ImageContainer = tw.div`
  hidden sm:flex sm:flex-col w-1/2 h-full gap-4
`;


const NewsContainer = tw.div`
w-full mt-6 mb-20
grid grid-cols-1 lg:grid-cols-4
xl:grid-cols-5 items-center justify-center 
 text-sm bg-white text-black gap-y-6 gap-x-0
`;