import React from 'react'
import tw from "tailwind-styled-components"

const Banner = () => {
  return (
    <>
    <BannerContainer>
        <Overlay/>
            <div>
                <img src= "https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='Hero Banner'
                    className='w-full h-[450px] object-cover'
                />
            </div>
            <Promotion>
                <span className='text-2xl md:text-5xl w-1/2 '>ORDER FAST FOOD TO YOUR DOOR</span>

                <div className='flex gap-2 my-2'>
                    <Button>OUR MENU</Button>
                    <Button className='text-white bg-black w-32'>ORDER ONLINE</Button>
                </div>
                 <span className='text-4xl'>SIMPLE. HEALTHY</span>
            </Promotion>
    </BannerContainer>
   </>
  )
}

export default Banner

const BannerContainer = tw.div`
    w-full h-full text-white mb-10 
`;

const Overlay = tw.div`
    absolute w-full h-[450px] bg-gradient-to-r from-black
`;

const Promotion = tw.div`
    flex flex-col gap-2 W-3/4
    absolute top-[20%] p-4 md:p-8
`;

const Button = tw.div`
    w-24 h-10 flex items-center justify-center border 
    border-gray-300 bg-gray-200 text-black  cursor-pointer
`;

