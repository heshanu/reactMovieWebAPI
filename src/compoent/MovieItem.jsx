import React from 'react';
import '../App.css';

const MovieItem = (props) => {

    const { Title, Year, imdbID, Type, Poster } = props.movie;
    return (
        <div className="card" >
            <img src={Poster} className="card-img-top" alt={Title} />
            <div className="card-body">
                <h5 className="card-title">{Title}</h5>
                <p className="card-text">{Year} - {Type}</p>
            </div>
        </div>
    );
}

export default MovieItem;
