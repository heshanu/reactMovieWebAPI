import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { BsFillBalloonHeartFill } from "react-icons/bs";


const MovieItem = (props) => {

    const { Title, Year, imdbID, Type, Poster } = props.movie;
    const defaultImage = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.123rf.com%2Fphoto_104524510_stock-vector-no-image-available-icon-flat-vector-illustration.html&psig=AOvVaw0QZ3Z4Z4Z4Z4Z4Z4Z4Z4Z4&ust=1619787228212000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjQ4ZqH4_ACFQAAAAAdAAAAABAD';
    return (
        <div className="c m-24 mb-0 flex grid lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-3 gap-8 content-start">
            {Poster ? <img src={Poster} className="card-img-top rounded-4" alt={Title} /> : <img src={defaultImage} className="card-img-top" alt={Title} />}
            <div className="card-body">
                <h5 className="card-title mt-16">{Title.substring(0,30) }</h5>
                <p className="card-text m-8">{Year} - {Type}</p>
            </div>

        </div>
    );
}

export default MovieItem;
