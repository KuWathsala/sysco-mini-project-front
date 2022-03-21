import React, { useEffect, useState } from 'react';

const CategoryCard = (props) => {
    return(
        <div key={props.name} className="flex-container">
            <div className="card">
                <img src={props.imgURL} className="img"/>
                <button className="button select">{props.name}</button>
            </div>
        </div>
    );
}

export default CategoryCard