// import "./App.css";
import './App.css';
import { useEffect,useState } from 'react';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";


//ab4c7be0

const URL_API = `http://www.omdbapi.com?apikey=ab4c7be0`;

// const movie = {
//   "Title": "A Glitch in the Matrix",
//   "Year": "2021",
//   "imdbID": "tt9847360",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BMWRhNGY3NGQtMDAxMS00YjY2LTgzOTUtZjljZmUyYWQwMGI2XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"
// }

const App = ()=> {

  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title)=>{
    const response = await fetch(`${URL_API}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }

  useEffect(()=>{
    searchMovies('Matrix');
  }, []);

  return (
    <div className="App">

      <h1>CinemaScope</h1>

      <div className='search'>
        <input placeholder='Search for a movie...' value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}}/>

        <img src={SearchIcon} alt='search' onClick={()=>{searchMovies(searchTerm)}}/>
      </div>

      
      {movies?.length > 0 ? (
         <div className="container">
           {movies.map((movie) => (
             <MovieCard movie={movie} />
           ))}
         </div>
       ) : (
         <div className="empty">
           <h2>No movies found</h2>
         </div>
       )}
      
    </div>
  );
}

export default App;


// import React, { useState, useEffect } from "react";

// import MovieCard from "./MovieCard";
// import SearchIcon from "./search.svg";
// import "./App.css";

// const API_URL = "http://www.omdbapi.com?apikey=ab4c7be0";

// const App = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     searchMovies("Batman");
//   }, []);

//   const searchMovies = async (title) => {
//     const response = await fetch(`${API_URL}&s=${title}`);
//     const data = await response.json();

//     setMovies(data.Search);
//   };

//   return (
//     <div className="app">
//       <h1>MovieMojo</h1>

//       <div className="search">
//         <input
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           placeholder="Search for movies"
//         />
//         <img
//           src={SearchIcon}
//           alt="search"
//           onClick={() => searchMovies(searchTerm)}
//         />
//       </div>

//       {movies?.length > 0 ? (
//         <div className="container">
//           {movies.map((movie) => (
//             <MovieCard movie={movie} />
//           ))}
//         </div>
//       ) : (
//         <div className="empty">
//           <h2>No movies found</h2>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;