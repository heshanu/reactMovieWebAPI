import React from 'react';
import MovieItem from './MovieItem';
import { BsFillBalloonHeartFill } from "react-icons/bs";


const FavouriteList = (props) => {
    const { Title, Year, imdbID, Type, Poster } = props;
    const defaultImage = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.123rf.com%2Fphoto_104524510_stock-vector-no-image-available-icon-flat-vector-illustration.html&psig=AOvVaw0QZ3Z4Z4Z4Z4Z4Z4Z4Z4Z4&ust=1619787228212000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjQ4ZqH4_ACFQAAAAAdAAAAABAD';
    return (
        <div className="c">
            {Poster ? <img src={Poster} className="card-img-top" alt={Title} /> : <img src={defaultImage} className="card-img-top" alt={Title} />}
            (
                <div className="card-body">
                    <h5 className="card-title">{Title}</h5>
                    <p className="card-text">{Year} - {Type}</p>
                    <button onClick={props.handleFavClick(props.fav)}><BsFillBalloonHeartFill /></button>
                    <br />
                    <button onClick={props.handleFavRemove}><BsFillBalloonHeartFill /></button>
                </div>
            ) 

        </div>
    );
}

export default FavouriteList;
