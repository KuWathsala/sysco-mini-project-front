import React, { } from 'react';
import './index.css';
import CartList from './CartList';
import {ProductList} from '../Product';
const Layout = (props) => {
    
    return (
        <div>
            <CartList/>
            <ProductList/>
        </div>
    );
}

export default Layout;