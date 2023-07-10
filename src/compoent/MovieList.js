import React from 'react';
import MovieItem from './MovieItem';

const MovieList = (props) => {
    return (
        <>

            {
                props.movies && (props.movies.map((movie, index) => (
                    <>
                                <MovieItem key={index} movie={movie}/>
                    </>
                
                    // <div className="flex grid lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-3 gap-8 content-start">
        
                    // </div>
                )))
            }
        </>
    );
}

export default MovieList;
