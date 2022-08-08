import React from 'react'
import tw from "tailwind-styled-components"

const NavBar = () => {
  return (
    <NavBarContainer>
      <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>Netflix</h1>
      <div>
        <button className='mr-2 border border-gray-300 px-6 text-sm  text-white py-1 rounded cursor-pointer'>Sign In</button>
         <button className='border border-red-600 bg-red-600 px-6 text-sm  text-white py-1 rounded cursor-pointer'>Sign Up</button>
      </div>
    </NavBarContainer>
  )
}

export default NavBar

const NavBarContainer = tw.div`
  flex items-center justify-between fixed top-0 left-0 right-0 px-4 pt-2 z-[100] w-full 
  
`;

