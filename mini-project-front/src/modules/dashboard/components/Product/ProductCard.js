import React, { useEffect, useState } from 'react';

const ProductCard = (props) => {
    return(
        <div key={props.id}>
            <img src={props.imgURL} className="img"/>    
            <ul className="card-ul">
                <li className="name" >{props.name}</li>
                <li className="price" >LKR {props.price}</li>
                <li>{(props.qty>0)?<label style={{color:"green"}}>available</label>:<text  style={{color:"red"}}>out of stock</text>}</li>
            </ul>
        </div>
    );
}

export default ProductCard;