import React, {useState} from 'react'
import tw from "tailwind-styled-components"
import {MdFastfood} from "react-icons/md";
import {AiOutlineMenu, AiOutlineClose}  from "react-icons/ai";
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [closeButtonOpen, setCloseButtonOpen] = useState(false);

  return (
    <NavBarContainer>
      <h1 className='text-red-600 text-xl sm:text-3xl font-bold cursor-pointer'>
        <MdFastfood/>Food Delivery
      </h1>
      <div>
        <div className='hidden sm:flex gap-4 text-sm'>
            <span className='text-white'>Home</span>
            <span className='text-white'>Wallet</span>
            <span className='text-white'>Place Group Order</span>
            <span className='text-white'>Special Offers</span>
            <span className='text-white'>Blog</span>
            <span className='text-white'>Contact</span>
        </div>
      </div>
      <div className='flex gap-2'>
        <button className='border border-gray-300 px-6 text-sm  text-white py-1 rounded cursor-pointer'>Sign In</button>
         <button className='mr-0 sm:mr-4 border border-red-600 bg-red-600 px-6 text-sm  text-white py-1 rounded cursor-pointer'>Sign Up</button>
         <Link to = "#" onClick={() => setCloseButtonOpen(true)}>
            <AiOutlineMenu className='text-white w-6 h-6 sm:w-8 sm:h-8'/>
        </Link>
      </div>
  

      <SidebarMenu className = {closeButtonOpen === true ? 'scale-100 opacity-80' : 'scale-0'}>

          <CloseButtonWrapper >
              <span className='text-lg mt-4 cursor-pointer' 
                    onClick={() => setCloseButtonOpen(false)}>
                    <AiOutlineClose className='text-white w-6 h-6 sm:w-8 sm:h-8'/>
               </span>
          </CloseButtonWrapper>
          
      
          <Link to = "#">Home</Link>
          <Link to= "#" >Wallet</Link>
          <Link to= "#" >Place Group Order</Link>
          <Link to= "#" >Special Offers</Link>
          <Link to= "#">Blog</Link>
          <Link to= "#">Contact</Link>    
        </SidebarMenu>
    </NavBarContainer>
  )
}

export default NavBar

const NavBarContainer = tw.div`
  flex items-center justify-between absolute top-0 left-0 right-0 px-4 pt-2 z-[100] w-full 
`;

const SidebarMenu = tw.div`
  fixed top-0 bottom-0 right-0 pt-0  list-none bg-black text-white w-60 z-10
  flex flex-col text-start pl-10 gap-4  text-sm origin-left ease-out
`;
const CloseButtonWrapper = tw.div`
  flex flex-row-reverse item-center justify-items-end; mt-2 p-3 pr-8
`;
