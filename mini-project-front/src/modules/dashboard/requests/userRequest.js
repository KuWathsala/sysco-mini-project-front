import axios from 'axios';
import {cartData} from '../components/Cart/cartData'
// import {apiBaseURL} from '../../../constants';

export const requestGetUserDetatils = () => {
    console.log("request Get user details !")
    return cartData;
    // return axios.get(`${apiBaseURL}/categories`)
}