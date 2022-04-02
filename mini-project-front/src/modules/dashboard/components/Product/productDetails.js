import React, { } from 'react';
import {connect} from 'react-redux';  
import {useParams} from 'react-router-dom';
import {BsCart3} from 'react-icons/bs';


const ProductDetails = (props) => {

    const {category_id, product_id} = useParams();

    const {imgURL, name, price, qty}  = props.bySearchResult ? props.products.productsList[product_id] : props.categories.categoriesList[category_id].products[product_id];

    return (
        <div className='details-container' >
            <img src={imgURL} className="img"/>    
            <div className="card-div">
                <label className="name" >{name}</label>
                <label className="price" >LKR {price}</label>
                <label>{(qty>0)?<label style={{color:"green"}}>available : {qty}</label>:<text  style={{color:"red"}}>out of stock</text>}</label>
            </div>
            <div className='add-to-cart'>
                <button className='cart-button'>
                    Add to cart
                </button>
            </div>
        </div>
    );

}

const mapStateToProps = (state) => {
    console.log("ProductDetails state: ", state.products)
    return { 
        categories: state.categories,
        products: state.products
    }
}

export default connect(mapStateToProps, {})(ProductDetails);