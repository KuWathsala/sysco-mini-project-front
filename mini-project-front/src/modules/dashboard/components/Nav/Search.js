import React, {useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import {useDispatch, useSelector, connect} from 'react-redux';  
import {requestSearchProductsByName} from '../../actions';
import {useNavigate} from 'react-router-dom';

const Search = (props) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [searchName, setSearchName]= useState('');

    const handleSubmit=()=>{
        dispatch(requestSearchProductsByName(searchName))
        navigate(`/products/search/${searchName}`);
    }

    return(
        <div className="search-container">
            <input
                value={searchName}
                onChange={(e)=>{setSearchName(e.target.value)}}
                type="text"
                id="header-search"
                placeholder="Search for Foods"
            />

            <button onClick={handleSubmit} className="search-container button" >
                <FaSearch/>
            </button>
        </div>
    );   

}

const mapStateToProps = (state) => {
    console.log("state in search: ", state)
    return { 
        products: state.products,
    }
}

export default connect(mapStateToProps, {})(Search);