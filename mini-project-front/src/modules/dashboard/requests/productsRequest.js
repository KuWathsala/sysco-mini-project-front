import axios from 'axios';
import {apiBaseURL} from '../../../constants';

export const requestSearchProductsByName = (name) => {
    console.log(name)
    console.log("request Search Name by Name !")
    return axios.get(`${apiBaseURL}/products/search-product/${name}`);
}