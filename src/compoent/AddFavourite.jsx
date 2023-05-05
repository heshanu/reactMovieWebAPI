import React from 'react'
import { BsFillHeartFill } from "react-icons/bs";

const AddFavourite = () => {
    return (
        <div>
            <span className='me-2'>Add to Fav</span>
            <BsFillHeartFill className='text-danger' />
        </div>
    );
}

export default AddFavourite;
