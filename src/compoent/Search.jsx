import React, { useState} from 'react';

const Search = (props) => {
    const [search, setSearch] = useState('');
  
    const searchHandler = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    }

    return (
        <div className='container-fluid'>
            <nav className="navbar navbar-light bg-light justify-content-between">
                <form className="form-inline">
                    <input className="form-control mr-sm-2" value={search} type="search" placeholder={props.title} aria-label="Serch" onChange={searchHandler} />
                </form>
            </nav>
        </div>
    );
}

export default Search;
