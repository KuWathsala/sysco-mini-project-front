import React from 'react'
import {Nav} from '../Nav';
import {CategoryList} from '../Category';
import {ProductList} from '../Product';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Layout =() => {
    return (
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<CategoryList/>} />
          <Route path="/products" element={<ProductList />} />
        </Routes>
      </Router>
    );
}

export default Layout;