import React, { useEffect, useState } from 'react';

const ProductCard = (props) => {
    return(
        <div key={props.id}>
            {/* <div className="img"> */}
                <img src={props.imgURL} className="img"/>            
            {/* </div> */}
            <ul className="card-ul">
                <li className="name" >{props.name}</li>
                <li className="price" >LKR {props.price}</li>
                <li>{(props.qty>0)?<text style={{color:"green"}}>available</text>:<text  style={{color:"red"}}>out of stock</text>}</li>
            </ul>
        </div>
    );
}

export default ProductCard;