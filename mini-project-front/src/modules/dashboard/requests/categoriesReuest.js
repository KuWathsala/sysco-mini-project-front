import axios from 'axios';

export const requestGetCategories = () => {
    console.log("request Get Categories !")
    return axios.request({ 
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/todos'
    })
}