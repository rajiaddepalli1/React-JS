import React, {useState} from 'react'
import tw from "tailwind-styled-components"
import {FaHeart, FaRegHeart} from 'react-icons/fa';

const MovieRow = ({category, movies}) => {
    const [like, setLike] = useState(false);

    const baseImageURL = 'https://image.tmdb.org/t/p';

    return (
    <>
    <span className='text-white text-2xl pl-3'>{category}</span>
        <Row>
         {
            movies.map((movie, id)=> (

               <div className='relative'>
                
                   <img src={`${baseImageURL}/original/${movie?.poster_path}`} alt={movie?.title}
                              className='w-[160px] h-[200px] object-cover cursor-pointer' />         
                    <div className='absolute top-0 left-0 right-0 hover:bg-black/70
                        text-white opacity-0 hover:opacity-100 w-full h-full'>
                        <h2 className='p-2'>{movie?.original_title}</h2>
                        <span className='absolute bottom-0 right-0 p-2'>
                            { like ? <FaHeart/> : <FaRegHeart/> }
                        </span>
                    </div>
                    
                </div>       
            ))
           }
        </Row>    
    </>
  )
}

export default MovieRow

const Row = tw.div`
   mt-2 mb-10  grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 
   sm:gap-4 px-2 sm:px-3
  
`;
