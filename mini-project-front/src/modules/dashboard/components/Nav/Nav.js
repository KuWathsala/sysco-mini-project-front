import React from 'react'
import {Link} from 'react-router-dom';
import './nav.css';
import Search from './Search';

const Nav =() => {
    return (
      <nav className='nav'>
        
        {/* <ul className="list">
            <li className="items">
                <Link to="/item1">item 1</Link>
            </li> 

            <li  className="items">
                <Link to="/item2">item 2</Link>
            </li>

            <li  className="items">
                <Link to="/item3">item 3</Link>
            </li>
        </ul> */}

        <Search/>
      </nav>
    );
}

export default Nav;
  
