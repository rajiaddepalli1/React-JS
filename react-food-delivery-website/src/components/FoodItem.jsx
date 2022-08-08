import React from 'react'
import tw from "tailwind-styled-components"
import menu from '../data/menu'

const FoodItem = ({foodItems, filterByType, filterByPrice, allFoodItems}) => {

  return (
    <FoodItemContainer>
        <h1 className='text-red-600 font-bold text-2xl lg:text-3xl text-center mb-2'>New On The Menu</h1>

        {/* Filter Row */}
        <div className='flex flex-col lg:flex-row gap-4 justify-between items-center' >

            {/* Filter By Category */ }
            <div className='flex gap-2 flex-wrap'>

                 <div className='flex flex-col gap-1 items-center justify-center hover:scale-110 duration-300 cursor-pointer'
                            onClick={ ()=> {allFoodItems(menu)}}>
                    <img src='https://images.pexels.com/photos/1860208/pexels-photo-1860208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                          className='w-[70px] h-[70px] object-cover rounded-full border-2 border-red-500' />
                    <span>All</span>
                 </div>   
                 <div className='flex flex-col gap-1 items-center justify-center hover:scale-110 duration-300 cursor-pointer'
                            onClick={ ()=> filterByType('Sandwiches')}>
                    <img src='https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                          className='w-[70px] h-[70px] object-cover rounded-full border-2 border-red-500' />
                    <span>Sandwitches</span>
                 </div>   
                 <div className='flex flex-col gap-1 items-center justify-center hover:scale-110 duration-300 cursor-pointer'
                          onClick={ ()=> filterByType('Pizza')}                    
                 >
                    <img src='https://images.pexels.com/photos/4109078/pexels-photo-4109078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                          className='w-[70px] h-[70px] object-cover rounded-full border-2 border-red-500' />
                    <span>Pizza</span>
                 </div>      
                 <div className='flex flex-col gap-1 items-center justify-center hover:scale-110 duration-300 cursor-pointer'
                        onClick={ ()=> filterByType('Desserts')} 
                 >
                    <img src='https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                          className='w-[70px] h-[70px] object-cover rounded-full border-2 border-red-500' />
                    <span>Desserts</span>
                 </div>      
                 <div className='flex flex-col gap-1 items-center justify-center hover:scale-110 duration-300 cursor-pointer'
                        onClick={ ()=> filterByType('Juice')}
                 >
                 <img src='https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                          className='w-[70px] h-[70px] object-cover rounded-full border-2 border-red-500' />
                    <span>Juice</span>
                 </div>           
            </div>
        
         
            {/* Filter By Price */ }
            <div className='flex gap-2 items-center justify-center'>
                <FilterButton onClick={ ()=> filterByPrice('$')}>$</FilterButton>
                <FilterButton onClick={ ()=> filterByPrice('$$')}>$$</FilterButton>
                <FilterButton onClick={ ()=> filterByPrice('$$$')}>$$$</FilterButton>
            </div>
        </div>    

        {/*  */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
            {
                foodItems.map ((item, index)=> (
                    <div key={index}  className='relative border shadow-lg rounded-lg hover:scale-105 cursor-pointer duration-300 '>
                        <img src={item.image} className='w-full h-[200px] object-cover rounded-t-lg' />
                         
                        <div className='flex justify-between px-2 py-3'>
                            <p className='font-bold'>{item.name}</p>
                                <span className='text-small'>US ${item.price}</span>
                        </div>
                    </div>
                ))
            }
        </div>

    </FoodItemContainer>
  )
}

export default FoodItem

const FoodItemContainer = tw.div`
    w-full m-auto px-4 sm:px-40  mb-12
`;

const FilterButton = tw.div`
    flex justify-center items-center text-sm text-black rounded-full border-2 border-red-300
    bg-white h-12 w-12  cursor-pointer mt-0 
    hover:bg-red-500 hover:text-white hover:border-0
`;