import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard.js';
import './product.css';

import { productData } from './productData.js';


const ProductList = () => {

    // useEffect(()=>{console.log(categoriesData.data)});

    const listItems = <div className="product-container">{productData.data.map((item) =>
        ProductCard(item)
    )}</div>

    return (
        <div>
            {listItems}
        </div>
    );
} 

export default ProductList;