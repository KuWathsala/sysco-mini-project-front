import {
    SEARCH_PRODUCTS_BY_NAME_REQUESTED,
    SET_SEARCH_PRODUCTS_BY_NAME_REQUESTED
} from '../actions/types';

//change previous state to next state
//need to define initial state to go to next state
const initialState = {
    loading: true,
    productsList: []
};

export const productsReducer = (state=initialState, action) => {
    switch(action.type) {

        case SEARCH_PRODUCTS_BY_NAME_REQUESTED:
            console.log("SEARCH_PRODUCTS_BY_NAME_REQUESTED")
            return {...state};

        case SET_SEARCH_PRODUCTS_BY_NAME_REQUESTED:
            console.log("SET_SEARCH_PRODUCTS_BY_NAME_REQUESTED")
            console.log(action.response)
            const data = action.response.data
            return {...state, productsList: data, loading: false}; 

        default:
            return state;
    }
}