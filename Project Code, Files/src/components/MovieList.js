import React from 'react';

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;

	return (
		<>
			{props.movies.length >= 1 ? (props.movies.map((movie, index) => (
				<div className='image-container d-flex justify-content-start m-3'>
					<img src={movie.Poster} alt='movie'></img>
				</div>
			))) : (
				<h1>Movie Not Found</h1>
			)}
		</>
	);
};

export default MovieList;
