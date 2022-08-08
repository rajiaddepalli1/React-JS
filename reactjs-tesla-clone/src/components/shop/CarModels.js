import React from 'react'
import tw from "tailwind-styled-components"
import Fade from 'react-reveal/Fade';
import {IoChevronDown} from "react-icons/io5";

const CarModels = ({carModel, customOrderText, existingInventoryText }) => {
    
  return (
    <CarModelWrapper>
      
      <img src={`/images/${carModel.image}`} className='object-cover w-screen h-screen' />
      
      <CarModeltext>
      <Fade top>
            <h1 className='text-[36px] m-auto font-bold text-black'>{carModel.model_name}</h1>
            <p className='m-auto pt-1 text-[14px] text-black'>
              {carModel.description}
            </p>
      </Fade>
      </CarModeltext>

    <div className='flex flex-col items-center justify-center'>
      <Buttons>
      <Fade top>
           <CustomOrderButton> {customOrderText}</CustomOrderButton>
                { existingInventoryText && 
                    <ExistingInventoryButton> {existingInventoryText} </ExistingInventoryButton>
                }                            
       </Fade> 
       </Buttons>
       <DownArrowIcon/>
    </div>   

    </CarModelWrapper>
  )
}

export default CarModels;

const CarModelWrapper = tw.div`
  relative flex flex-col  items-center w-screen h-screen justify-center
`;

const CarModeltext = tw.div`
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