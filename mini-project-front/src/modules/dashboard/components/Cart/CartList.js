import React, { useEffect } from 'react';
import './index.css';
import {connect, useDispatch} from 'react-redux';
import {requestGetUerDetails, changeCartId} from '../../actions';

const CartList = (props) => {

    const dispatch = useDispatch();     

    useEffect(()=>{
        console.log("CartListprops here", props)
        dispatch(requestGetUerDetails())
    },[dispatch]);

    const handleOnClickCart=(id) => {
        props.changeCartId(id)
    }

    const displayCartList = () => {
        return(
            <div className="cart-list">{props.carts && props.carts.map(
                (item, id) => <div className="name" onClick={()=>handleOnClickCart(id)} key={id} >{
                    <label>{item.name}</label>
                }</div>
            )}</div>)
    }

    return (
        <div className="container">
            {displayCartList()}
        </div>
    );
} 

const mapStateToProps = (state) => {
    return {
        isloading: state.user.loading,
        carts: state.user.user.carts
    }
}

export default connect(mapStateToProps, {changeCartId})(CartList);