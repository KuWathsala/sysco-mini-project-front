import React, { useEffect, useState } from 'react';
import CategoryCard from  './CategoryCard';
import './category.css';
import { categoriesData } from './categoriesData';

import {useDispatch, useSelector, connect} from 'react-redux';  
import {requestGetCategories} from '../../actions';

const CategoryList = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(requestGetCategories())
    },[dispatch]);

    const listItems = <div className="category-container">{categoriesData.data.map((item) =>
        CategoryCard(item)
    )}</div>

    return (
        <div>
            {listItems}
        </div>
    );
} 

const mapStateToProps = (state) => {
    console.log(state)
    return { 
        categories: state.categories
    }
}

export default connect(mapStateToProps, {requestGetCategories})(CategoryList);
// export default CategoryList;