import React, {useState} from 'react';
import {FaSearch} from 'react-icons/fa';

const Search = () => {

    const [searchName, setSearchName]= useState('');

    const handleSubmit=(e)=>{
        setSearchName(e.target.value);
    }

    return(
        <div className="search-container">
            <input
                value={searchName}
                onChange={handleSubmit}
                type="text"
                id="header-search"
                placeholder="Search for Foods"
            />

            <button onClick={handleSubmit} className=" search-container button" >
                <FaSearch/>
            </button>
        </div>
    );   

}
export default Search;