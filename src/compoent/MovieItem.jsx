import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css'

const MovieItem = (props) => {

    const { Title, Year, imdbID, Type, Poster } = props.movie;
    const defaultImage = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.123rf.com%2Fphoto_104524510_stock-vector-no-image-available-icon-flat-vector-illustration.html&psig=AOvVaw0QZ3Z4Z4Z4Z4Z4Z4Z4Z4Z4&ust=1619787228212000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjQ4ZqH4_ACFQAAAAAdAAAAABAD';
    return (
        <div className="c mt-32 mb-32">
            {Poster ? <img src={Poster} className="card-img-top rounded-4" alt={Title} /> : <img src={defaultImage} className="card-img-top" alt={Title} />}
            <div className="card-body">
                <h5 className="card-title mt-32 mb-32">{Title.substring(0,30) }</h5>
                <p className="card-text">{Year} - {Type}</p>
            </div>

        </div>
    );
}

export default MovieItem;
