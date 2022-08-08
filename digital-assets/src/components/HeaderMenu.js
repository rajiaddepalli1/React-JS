import {useState} from 'react'
import tw from "tailwind-styled-components"
import {AiOutlineClose}  from "react-icons/ai";
import { Link } from 'react-router-dom';

const HeaderMenu = () => {
  const [closeButtonOpen, setCloseButtonOpen] = useState(false);

  return (
    <MenuContainer>
        <a href ="/">
            <Logo>Digital Assets</Logo>
        </a>  

        <MenuCenter> 
            <Link to = "/">Home</Link>
            <Link to= "/exchanges">Exchanges</Link>
            <Link to= "/cryptocurrencies">Crypto Currencies</Link>
            <Link to= "/news">News</Link>
            <Link to= "/offerings">Our Offerings</Link>
            <Link to= "/blog">Blog</Link>
            <Link to= "/careers">Careers</Link>
        </MenuCenter>

        <Link to = "#" onClick={() => setCloseButtonOpen(true)}>Menu</Link>

        <SidebarMenu className={closeButtonOpen === true ? 'scale-100' : 'scale-0'}>
          <CloseButtonWrapper >
              <span className='text-black text-lg mt-4 cursor-pointer' 
              onClick={() => setCloseButtonOpen(false)}>X</span>
          </CloseButtonWrapper>
          <Link className='text-black'to= "/">Home</Link>
            <Link className='text-black' to= "/exchanges">Exchanges</Link>
            <Link className='text-black' to= "/cryptocurrencies">Crypto Currencies</Link>
            <Link className='text-black' to= "/news">News</Link>
            <Link className='text-black' to= "/offerings">Our Offerings</Link>
            <Link className='text-black' to= "/blog">Blog</Link>
            <Link className='text-black' to= "/careers">Careers</Link>
        </SidebarMenu>
    </MenuContainer>
  )
}

export default HeaderMenu

const MenuContainer = tw.div`
  flex items-center justify-between fixed top-0 left-0 right-0 
  pl-8 pr-4  py-0 h-14 z-10 bg-black text-white
`;
const Logo = tw.span`
  text-xl text-white cursor-pointer
`;
const MenuCenter = tw.div`
  flex items-center justify-between gap-10 text-sm
  a {
    font-normal
  }
  @media (max-width: 768px) {
    hidden sm:flex
    }
`;  


const SidebarMenu = tw.div`
  fixed top-0 bottom-0 right-0 pt-0  list-none bg-white w-60 z-10
  flex flex-col text-start pl-10 gap-2  text-sm origin-left ease-out
`;

const CloseButtonWrapper = tw.div`
  flex flex-end;
`;

const CloseButton = tw(AiOutlineClose)`
  w-6 h-6 cursor-pointer pt-0 
`;