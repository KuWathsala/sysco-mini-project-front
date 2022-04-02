import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';

const CategoryCard = (props) => {
    return(
        <div>
            <img src={props.imgURL} className="img"/>
            <label className="name" >{props.name}</label>
        </div>
    );
}

export default CategoryCard