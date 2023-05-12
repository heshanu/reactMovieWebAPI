import React from 'react';
import MovieItem from './MovieItem';

const MovieList = (props) => {
    return (
        <>

            {
                props.movies && (props.movies.map((movie, index) => (
                    <MovieItem key={index} movie={movie} handleFavRemove={props.handleFavRemove} handleFavClick={props.handleFavClick} />
                )))
            }
        </>
    );
}

export default MovieList;
