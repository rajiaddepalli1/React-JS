import React, {useState, useEffect} from 'react'
import axios from 'axios'
import tw from "tailwind-styled-components"
import requests from '../APIRequests';
import MovieRow from './MovieRow';

const MovieGrid = () => {

    const [popularMovies, setPopularMovies] = useState([]);
    const [nowPlaying, setNowPlaying] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [upcoming, setUpcoming] = useState([]);


    useEffect(()=>{
        
        axios.get(requests.popularMovies).then((response)=> {
            setPopularMovies(response.data.results)
        })
        axios.get(requests.nowPlaying).then((response)=> {
            setNowPlaying(response.data.results)
        })
        axios.get(requests.topRated).then((response)=> {
            setTopRated(response.data.results)
        })
        axios.get(requests.upcoming).then((response)=> {
            setUpcoming(response.data.results)
        })
    })

  
  return (
    <div >
        <MovieRow category='Popular Movies' movies ={popularMovies}/>
        <MovieRow category='Now Playing' movies= {nowPlaying}/>
        <MovieRow category='Top Rated' movies ={topRated}/>
        <MovieRow category='Upcoming' movies ={upcoming}/>
    </div>

  )
}

export default MovieGrid


   