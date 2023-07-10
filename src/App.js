import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


//import components
import MoiveList from '././compoent/MovieList';
import ListHeader from './compoent/ListHeader';
//import AddFavourite from './compoent/AddFavourite';
//import FavouriteList from './compoent/FavouriteList';

//import env
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "black",
};
function App() {

  //if there are not results, set the default value to be an 1 element array
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('batman');
  const [movies, setMovies] = useState([]);
  

  const API_KEY = 'aeaaad64';

  const searchHandler = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  }
  
  //get request from the api
  const getMovieRequest = async (searchValue) => {
    setLoading(true);
    const url = `http://www.omdbapi.com/?&s=${searchValue}&apikey=${API_KEY}`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
      //console.log(responseJson.Search);
    }
    setLoading(false);
  }

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  //get favourite movie from local storage
  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem('react-movie-app-favourites')
    );
    
  })

  //add favourite movie
  /*
  const AddFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
  }*/

  //remove favourite movie
  /*const RemoveFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID);
    setFavourites(newFavouriteList);
  }*/

  return (
    <div className="container-fluid movie-app">
      {loading && <ClipLoader
        color="red"
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />}
      <div>
        <div className='row'>
          <nav className="navbar navbar-dark bg-dark justify-content-between">
            <h1 style={{ color: 'white' }}>MovieAPI</h1>
            <form className="form-inline">
              <input className="form-control mr-sm-2" value={searchValue} type="search" placeholder="Search" aria-label="Serch" onChange={searchHandler} />
            </form>
          </nav>
        </div>
      </div>
      <div style={{ paddingLeft: 100 }}>
        <MoiveList movies={movies} />
      </div>

      <div className='row d-flex align-items-center mt-4 mb-4'>
        <ListHeader title='Favourites' />
      </div>
      
    </div>
  );
}

export default App;
