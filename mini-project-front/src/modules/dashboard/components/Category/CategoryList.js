import React, { useEffect, useState } from 'react';
import CategoryCard from  './CategoryCard';
import './index.css';
import { categoriesData } from './categoriesData';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector, connect} from 'react-redux';  
import {requestGetCategories} from '../../actions';

const CategoryList = (props) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        console.log("props here", props)
        dispatch(requestGetCategories())
    },[dispatch]);

    const handleOnClick =(id) => {
        console.log("click");
        navigate(`/category/${id}`);
    }

    const listItems = <div className="category-container">{props.categories.categoriesList.map((item, id) =>
        <div onClick={()=>handleOnClick(id)} key={id} >{CategoryCard(item)}</div>
    )}</div>

    const spinner = <div><label>loading</label></div>   

    return (
        <div className='container'>
            {console.log("render")}
            {props.categories.loading ? spinner : listItems}
        </div>
    );
} 

const mapStateToProps = (state) => {
    console.log("state: ", state)
    return { 
        categories: state.categories,
    }
}

export default connect(mapStateToProps, {requestGetCategories})(CategoryList);