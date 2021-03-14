import React, { useState } from 'react';
import './App.css';

function MovieCard({movie}){
  return(
    <div className="card-container">
        {
          movie.poster_path ? <img className="effect7" src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} /> : <div className="no-image effect7"></div>
        }
        <div>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <p>{movie.release_date?movie.release_date.substr(0,4):"-"}</p>
        </div>
    </div>
  )
}

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const getMovies = async (query) => {
    const API_KEY = "9d76961339392ffc0af91f185b780d3b";
    const movieResponse = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=true&query=${query}`);
    const movieJSON = await movieResponse.json();
    setMovies(movieJSON.results)
  }
  const handleSearch = (e) => {
    setQuery(e.target.value)
    getMovies(e.target.value)
  }
  return (
    <div className="app">
      <div className="wrapper">
        <div>
          <div className="search-header">
            <input className="input" type="text" placeholder="Search Movie.." value={query} onChange={handleSearch} />
            
          </div>
          <div className="container">
            {
              movies.length ? movies.map((movie) => (
                <MovieCard movie={movie} key={movie.id} index={movie.id} />
              )) : <div>No data available..</div>
            }
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
