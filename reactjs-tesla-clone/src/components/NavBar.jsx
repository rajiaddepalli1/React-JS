
import React, {useState} from 'react'
import tw from "tailwind-styled-components"
import {AiOutlineMenu, AiOutlineClose}  from "react-icons/ai";
import { Link } from 'react-router-dom';

import {selectCarModels, selectSideMenuItems} from '../features/models/modelSlice';
import {useSelector} from 'react-redux';

const NavBar = () => {

  const [closeButtonOpen, setCloseButtonOpen] = useState(false);
  const sideMenuItems = useSelector(selectSideMenuItems);
  const carModels = useSelector(selectCarModels);

  return (
    <NavBarContainer>
        <Link to ={'/'}>
          <img src="/images/logo.svg" className='w-[70px]'/>
        </Link>
    <div>
      <div className='hidden sm:flex gap-4 text-sm'>
           { 
            carModels && carModels.map ( (selectedCarModel, index) =>(
               <Link key ={index} to= { `/carModelSpec/${selectedCarModel}` }
               >{selectedCarModel}</Link>
          ) )
        }
      </div>
    </div>
    <div className='flex gap-2'>
      <button className='text-sm  text-black py-1 cursor-pointer'>Shop</button>
      <Link to="userAccount">
        <button className='text-sm  text-black py-1 cursor-pointer'>Account</button>
      </Link>
       <Link to = "#" onClick={() => setCloseButtonOpen(true)}>
          <AiOutlineMenu className='text-black w-6 h-6'/>
      </Link>
    </div>


    <SidebarMenu className = {closeButtonOpen === true ? 'scale-100 opacity-100 overflow-y-scroll scrollbar-hide' : 'scale-0'}>

        <CloseButtonWrapper >
            <span className='text-lg mt-0 cursor-pointer' 
                  onClick={() => setCloseButtonOpen(false)}>
                  <AiOutlineClose className='text-black w-6 h-6 '/>
             </span>
        </CloseButtonWrapper>
        
        { sideMenuItems && sideMenuItems.map ( (menuItem, index) =>(
               <li><Link key ={index} to={ `/carModelSpec/${menuItem}`}>{menuItem}</Link></li>
          ) )}  

      </SidebarMenu>
      
  </NavBarContainer>
  )
}

export default NavBar

const NavBarContainer = tw.div`
  fixed flex items-center justify-between  top-0 left-0 right-0 px-4 pt-2 z-[100] w-full 
`;

const SidebarMenu = tw.div`
  fixed top-0 bottom-0 right-0 pt-0  list-none bg-white text-black w-60 z-10
  flex flex-col text-start pl-10 gap-4  text-sm origin-left ease-out pb-6
`;
const CloseButtonWrapper = tw.div`
  flex flex-row-reverse item-center justify-items-end mt-4 pr-8
`;
