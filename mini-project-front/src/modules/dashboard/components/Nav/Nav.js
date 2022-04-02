import React, { useEffect, useState }  from 'react'
import {Link} from 'react-router-dom';
import './index.css';
import Search from './Search';
import {BsList, BsX} from 'react-icons/bs';

const Nav =() => {

    const [toggleMenu, setToggleMenu] = useState(false);
    const [innerWidth, setInnerWidth] = useState(window.innerWidth)
    
    
    const toggle = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(()=>{
        const changeWidth = () => {
            setInnerWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth)
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [innerWidth])

    const onlist = <BsList className='listdown' onClick={toggle}/>
    const offList = <BsX className='listdown' onClick={toggle}/>
    const logoView = <label>Mini-Project</label>
    // const logoView = <img className='logo' src={logo} alt='logo' />
    // const profileView = <img className='profile' src={profile} alt='logo' />

    const listItems =   <ul className='list'>
                            {getItemList().map((item) => <li className='items' key={item.toString()}>{item}</li>)}
                            <Search/>
                        </ul>

    return (
      <nav className='nav'>

        {/* {(innerWidth>700 || !toggleMenu&&innerWidth<=700) ? logoView : null} */}

        {(!toggleMenu&&innerWidth<=700) ? null : listItems}
        
        {/* {(innerWidth>700 || !toggleMenu&&innerWidth<=700) ? profileView : null} */}

        {/* <Search/> */}

        {(!toggleMenu) ? onlist : offList}

      </nav>
    );
}

export default Nav;


const getItemList = () => {
    return ['Categories', 'Cart'];
}