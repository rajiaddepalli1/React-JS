import React, {useState} from 'react'
import tw from "tailwind-styled-components"
import Banner from '../components/Banner'
import FoodItem from '../components/FoodItem'
import OffersCards from '../components/OffersCards'
import offers from '../data/offers'
import menu from '../data/menu'

const Home = () => {
  
  const [foodItems, setFoodItems] = useState(menu);

  // All Food Items
  const allFoodItems = (menu)  => {
    setFoodItems(menu)
  }

    // Filter By Type
    const filterByType = (category) => {
      setFoodItems(
          menu.filter( (item)=> {
              return item.category === category
          })
      )
  }

  // Filter By Price
  const filterByPrice = (priceLimit) => {
      setFoodItems(
          menu.filter( (item)=> {
              return item.priceLimit === priceLimit
          })
      )
  }

  
  return (
    <HomeContainer>
        <Banner/>
        <OffersCards allOfferItems ={offers} />
        <FoodItem  
              foodItems = {foodItems}
              filterByType = {filterByType}
              filterByPrice = {filterByPrice}
              allFoodItems = {allFoodItems}
              />
    </HomeContainer>
  )
}


export default Home

const HomeContainer = tw.div`
  flex flex-col items-center 
`;