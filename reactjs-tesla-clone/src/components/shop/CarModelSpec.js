import React, {useState} from 'react'
import tw from "tailwind-styled-components"
import Fade from 'react-reveal/Fade';
import CarModelSpecifications from '../../data/CarModelSpecifications';

import { useParams } from 'react-router-dom';

const CarModelSpec = () => {
    const {selectedCarModel} = useParams();

      return ( 
         CarModelSpecifications.map((carModel) => {
          if( carModel.model_name === selectedCarModel )
               
              return (
                 <ModelWrapper>
                     <img src={`/images/${carModel.image}`} className='object-cover w-screen h-screen' />
                          
                         <ModelText>
                          <Fade top>
                             <h1 className='text-[36px] m-auto font-bold text-black'>{carModel.model_name}</h1>
                             <p className='m-auto pt-1 text-[14px] text-black'>{carModel.description}</p>
                           </Fade>    
                          </ModelText>

                           
                           <SpecificationContainer>
                           <Fade top>
                              <SpecificationBox>
                                <Specification>
                                   <h1 className='text-[18px] sm:text-[24px] font-bold text-black'>{carModel.range}</h1>
                                   <span>Range (EPA est.)</span>
                                </Specification>
                                <Specification>
                                   <h1 className='text-[18px] sm:text-[24px] font-bold text-black'>{carModel.topSpeed}</h1>
                                   <span>Top Speed</span>
                                </Specification>
                                <Specification>
                                   <h1 className='text-[18px] sm:text-[24px] font-bold text-black'>{carModel.acceleration}</h1>
                                   <span>0-60 mph*</span>
                                </Specification>
                                <Specification>
                                   <h1 className='text-[18px] sm:text-[24px] font-bold text-black'>{carModel.peak_power}</h1>
                                   <span>Peak Power</span>
                                </Specification>
                              </SpecificationBox>
                              <OrderButton>Order Now</OrderButton>
                              </Fade>  
                            </SpecificationContainer>
                            
                        </ModelWrapper>
                    )
                 })
            )
    }
    
 

export default CarModelSpec;

const ModelWrapper = tw.div`
  relative flex flex-col items-center w-screen h-screen justify-center
`;

const ModelText = tw.div`
  absolute top-20 flex flex-col justify-center items-center
`;

const SpecificationContainer = tw.div`
w-screen
  absolute bottom-10 sm:bottom-16 flex flex-col sm:flex-row sm:gap-12 gap-4 items-center justify-center px-4
`;

const SpecificationBox = tw.div`
  flex gap-[40px] sm:gap-[80px]
`;

const Specification = tw.div`
  flex flex-col gap-[3px]  
  span {
    text-[13px] pt-[0px] text-black
  }
`;

const OrderButton = tw.div`
  flex justify-center items-center
  bg-transparent text-black border-[3px] border-black h-[40px] w-[360px] sm:w-[210px]
  rounded-[100px] opacity-80 cursor-pointer uppercase
  text-[14px] font-bold tracking-wide
`;


