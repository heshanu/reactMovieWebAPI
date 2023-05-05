import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//import components
import MoiveList from '././compoent/MovieList';
import ListHeader from './compoent/ListHeader';

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

  console.log(movies);

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
        <ListHeader title="MovieAPI" />
        <div className='row'>
          <nav className="navbar navbar-light bg-light justify-content-between">
            <a className="navbar-brand">MovieAPI</a>
            <form className="form-inline">
              <input className="form-control mr-sm-2" value={searchValue} type="search" placeholder="Search" aria-label="Serch" onChange={searchHandler} />
            </form>
          </nav>
        </div>
      </div>
      <div style={{paddingLeft:100}}>
        <MoiveList movies={movies} />
      </div>

    </div>
  );
}

export default App;
