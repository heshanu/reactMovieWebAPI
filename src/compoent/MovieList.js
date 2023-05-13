import React from 'react';
import MovieItem from './MovieItem';

const MovieList = (props) => {
    return (
        <>

            {
                props.movies && (props.movies.map((movie, index) => (
                    <MovieItem key={index} movie={movie}/>
                )))
            }
        </>
    );
}

export default MovieList;
