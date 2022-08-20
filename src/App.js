import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';


//3e0e2ece

const API_URL = 'http://www.omdbapi.com?apikey=3e0e2ece'


const movie1 = 
    {
        "Title": "Italian Spiderman",
        "Year": "2007",
        "imdbID": "tt2705436",
        "Type": "movie",
        "Poster": "N/A",
    }


const App = () => {

    const [movies, setMovies] = useState([]);

    const [searchTerm, setSearchTerm] = useState('');




    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {

        searchMovies('Spiderman');
    },[]);




    return(
       <div className='app'>
        <h1>Cineverse</h1>

        <div className="search">
            <input placeholder='search movies' 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} 
            />

            <img src={SearchIcon}
            alt="search"
            onClick={() => searchMovies(searchTerm)}  
            />



            
        </div>

        {
            movies?.length > 0
            ? (
                <div className='container'>
            {movies.map((movie) => (
                <MovieCard movie={movie} />
            ))}

        </div>
            ):(
                <div className='empty'>

                    <h2>Match not found</h2>
                    </div>
            )


        }






        

       </div>
    );
}
export default App;