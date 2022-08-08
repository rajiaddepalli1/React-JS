import React from 'react'
import tw from "tailwind-styled-components"

const News = ({article}) => {
  return (
    <NewsBox>
            <Header>
              <div><img src= {article.image?.thumbnail?.contentUrl}  width={100} height={100}/></div>
              <div className='font-normal text-small'>{article.name}</div>
            </Header>
            <Body>
            <p className='font-normal text-small'>Provider: {article.description}</p>
            <p className='font-normal text-small'>Provider: {article.provider[0]?.name}</p>
            <p className='font-normal text-small'>Date: {article.datePublished}</p>
            </Body>
    </NewsBox>
  )
}

export default News

const NewsBox = tw.div`
  flex flex-col gap-2 w-60 h-96 border-2 items-center cursor-pointer p-2 mb-0
`;

const Header = tw.div`
    w-full flex gap-2 justify-between 
`;

const Body = tw.div`
    flex flex-col items-start gap-2 mt-2
`;