import axios from 'axios';
import {apiBaseURL} from '../../../constants';

export const requestGetCategories = () => {
    console.log("request Get Categories !")
    return axios.get(`${apiBaseURL}/categories`)
}