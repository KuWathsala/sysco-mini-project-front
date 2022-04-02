import React, { } from 'react';
import ProductCard from './ProductCard.js';
import './index.css';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux'; 
import {useNavigate} from 'react-router-dom';

const ProductList = (props) => {

    const navigate = useNavigate();
    const {category_id} = useParams();

    const handleOnClickCardByCategory =(category_id, product_id) => {
        console.log("handleOnClickCard in product list ByCategory ");
        navigate(`/category/${category_id}/product/${product_id}`);
    }

    const handleOnClickCardByName =(category_id, product_id) => {
        console.log("handleOnClickCard in product list ByName");
        navigate(`/product/${product_id}`);
    }

    const getProductsByName = () => {
        return(
            <div className="product-container">{props.products.productsList.map(
                (item, id) => <div onClick={()=>handleOnClickCardByName(item.categoryName, id)} key={id} >{ProductCard(item)}</div>
            )}</div>)
    } 

    const getProductsByCategory = () => {
        return (
            <div className="product-container">{props.categories.categoriesList[parseInt(category_id)].products.map(
                (item, product_id) => <div onClick={()=>handleOnClickCardByCategory(category_id, product_id)} key={product_id} >{ProductCard(item)}</div>
            )}</div>);
    } 

    return (
        <div>
            {props.byName ? getProductsByName() : getProductsByCategory()}
        </div>
    );
} 

const mapStateToProps = (state) => {
    return { 
        categories: state.categories,
        products: state.products
    }
}

export default connect(mapStateToProps, {})(ProductList);