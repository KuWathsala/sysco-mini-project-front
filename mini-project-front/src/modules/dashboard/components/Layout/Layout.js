import React from 'react'
import {Header, Nav} from '../Nav';
import {CategoryList} from '../Category';
import {ProductDetails, ProductList} from '../Product';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Layout =() => {
    return (
      <Router>
        <Nav/>
        {/* <Header/> */}
        <Routes>
          <Route path="/" element={<CategoryList/>} />
          <Route path="/products" element={<ProductList byName={false} />} />
          <Route path="/product/:product_id" element={<ProductDetails bySearchResult={true} />} />
          <Route path="/category/:category_id/product/:product_id" element={<ProductDetails bySearchResult={false} />} />
          <Route path="/products/search/:name" element={<ProductList byName={true} />}  />
          <Route path="/category/:category_id" element={<ProductList />} />
        </Routes>
      </Router>
    );
}

export default Layout;
