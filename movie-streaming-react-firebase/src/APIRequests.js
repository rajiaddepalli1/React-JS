const key = 'a46e4ddb694134a2532d1396a58c22cc'

const requests = {
   popularMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
   nowPlaying:  `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
    topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
};

export default requests;