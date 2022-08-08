import React from 'react'
import tw from "tailwind-styled-components"
import CarModelSpecifications from '../data/CarModelSpecifications';
import SolarProducts from '../data/SolarProducts';

import CarModels from '../components/shop/CarModels';
import Products from '../components/shop/Products';

const Home = () => {
  return (
    <div>
       <ModelsContainer>
          {
            CarModelSpecifications.map((carModel, index) => (
              <CarModels key ={index}
                carModel = {carModel}
                customOrderText ="Custom Order"
                existingInventoryText = "Existing Inventory"
            />
            )) 
          }

          {
            SolarProducts.map((product, index) => (
             <Products key ={index}
                product = {product}
            />
            ))
          }

    </ModelsContainer>
    </div>
  )
}

export default Home

const ModelsContainer = tw.div`
    w-screen h-screen
`;