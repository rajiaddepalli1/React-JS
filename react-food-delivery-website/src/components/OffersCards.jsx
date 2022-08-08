import React from 'react'
import tw from "tailwind-styled-components"

const OffersCards = ({allOfferItems}) => {
  return (
    <>
    <Row>
        {
            allOfferItems.map((offerItem, id)=> (
                <div className='relative cursor-pointer'>     
                    <img src={offerItem.image}
                          className='w-[350px] sm:w-[320px] h-[200px] object-cover rounded-lg brightness-50' />
                                   
                <div className='absolute  top-2 left-0 right-0
                    text-white w-full h-full'>
                    <h2 className='pl-3 pt-2 text-2xl font-bold'>{offerItem.title}</h2>
                    <div className='absolute  bottom-6 right-2'>
                        <OrderButton>Order Now</OrderButton>
                    </div>
                 </div>
                 
            </div>  
       ) )}        
    </Row>    
  </>
  )
}

export default OffersCards

const Row = tw.div`
   mb-10 grid grid-cols-1 sm:grid-cols-3  gap-6  sm:gap-12   w
`;

const OrderButton = tw.div`
    flex justify-center items-center text-sm text-black rounded-md
    bg-white h-8 w-20 sm:w-20   cursor-pointer mt-0 
`;