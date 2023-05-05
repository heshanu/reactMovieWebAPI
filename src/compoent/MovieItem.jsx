import React from 'react';

const MovieItem = (props) => {

    const { Title, Year, imdbID, Type, Poster } = props.movie;
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={Poster} className="card-img-top" alt={Title} />
            <div className="card-body">
                <h5 className="card-title">{Title}</h5>
                <p className="card-text">{Year} - {Type}</p>
            </div>
        </div>
    );
}

export default MovieItem;
