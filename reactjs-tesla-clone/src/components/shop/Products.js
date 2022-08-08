import React from 'react'
import tw from "tailwind-styled-components"
import Fade from 'react-reveal/Fade';
import {IoChevronDown} from "react-icons/io5";

const Products = ({product }) => {
    
  return (
    <SolarProductWrapper>
      
      <img src={`/images/${product.image}`} className='object-cover w-screen h-screen' />
      
            <ProductText>
            <Fade top>
                <h1 className='text-[36px] m-auto font-bold text-black'>{product.product_name}</h1>
                <p className='m-auto pt-1 text-[14px] text-black'>{product.description}</p>
            </Fade>
            </ProductText>

            <Fade top>
            <div className='flex flex-col items-center justify-center'>
              <Buttons>
                  <CustomOrderButton> {product.orderText}</CustomOrderButton>
                  {  product.learnMoreText && 
                  <ExistingInventoryButton> {product.learnMoreText} </ExistingInventoryButton>
                   }                            
              </Buttons>
              <DownArrowIcon/>
            </div>
            </Fade>

    </SolarProductWrapper>
  )
}

export default Products;

const SolarProductWrapper = tw.div`
  relative flex flex-col  items-center w-screen h-screen
`;

const ProductText = tw.div`
    absolute top-20 flex flex-col justify-center items-center
`;

const Buttons = tw.div`
    absolute bottom-24 flex flex-col sm:flex-row gap-[20px] 
`;

const CustomOrderButton =tw.div`
  bg-[#101010] text-white h-[36px] w-[340px] sm:w-[240px] 
  flex justify-center items-center opacity-80 cursor-pointer uppercase
  text-[13px] font-bold tracking-wide rounded-[50px]
`;

const ExistingInventoryButton = tw(CustomOrderButton)`
  bg-[#ffffff] opacity-70 text-[#101010]
`;

const DownArrowIcon = tw(IoChevronDown)`
absolute bottom-8 w-[22px] h-[22px] animate-bounce
       
`;