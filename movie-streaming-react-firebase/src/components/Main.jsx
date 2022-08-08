import React,{useEffect, useState} from 'react'
import requests from '../APIRequests';
import axios from 'axios'
import tw from "tailwind-styled-components"

const Main = () => {

     const [movies, setMovies] = useState([]);
     const movie = movies[Math.floor(Math.random() * movies.length)]

      const baseImageURL = 'https://image.tmdb.org/t/p';

    useEffect (()=> {
        axios.get(requests.popularMovies).then((response)=> {
            setMovies(response.data.results)
        })
    }, [])
        
    console.log(movies)

    const truncateMovieOverview = (overview, number)=> {
        if (overview?.length > number) {
            return overview.slice (0, number) + '...';
        }
        else {
            return overview;
        }   
    }

    return (
    <MainContainer>
        <Overlay/>
            <div>
                <img src={`${baseImageURL}/original/${movie?.backdrop_path}`} alt={movie?.title}
                    className='w-full h-[450px] object-cover'
                />
            </div>
            <MovieInfo>
                <h1 className='text-2xl md:text-3xl'>{movie?.original_title}</h1>
                <div className='flex gap-4'>
                    <span className='text-small'>Popularity: {movie?.popularity}</span>
                    <span className='text-small'>Vote Average: {movie?.vote_average}</span>
                </div>    
                <div className='flex gap-2 my-2'>
                    <Button>Play</Button>
                    <Button className='text-white bg-black w-32'>Watch Later</Button>
                </div>
                 <span className='text-small'>Release Date: {movie?.release_date}</span>
                 <p className='text-small w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[45%] text-gray-100'>
                    Overview: {truncateMovieOverview(movie?.overview, 160)}
                </p>   
                
            </MovieInfo>
    </MainContainer>
  )
}

export default Main

const MainContainer = tw.div`
    w-full h-full text-white mb-10
`;

const Overlay = tw.div`
    absolute w-full h-[450px] bg-gradient-to-r from-black
`;

const MovieInfo = tw.div`
    flex flex-col gap-2
    absolute top-[20%] p-4 md:p-8
`;

const Button = tw.div`
    w-24 h-10 flex items-center justify-center border 
    border-gray-300 bg-gray-200 text-black  cursor-pointer
`;