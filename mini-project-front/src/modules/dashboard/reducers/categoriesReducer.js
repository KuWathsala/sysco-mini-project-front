import {
    GET_CATEGORIES_REQUESTED, 
    SET_GET_CATEGORIES_REQUESTED
} from '../actions/types';

//change previous state to next state
//need to define initial state to go to next state
const initialState = {
    loading: true,
    categoriesList: []
};

//current state and the action is need to pass via arguments
export const categoriesReducer = (state=initialState, action) => {
    switch(action.type) {

        case GET_CATEGORIES_REQUESTED:
            console.log("GET_CATEGORIES_REQUESTED")
            return {...state};

        case SET_GET_CATEGORIES_REQUESTED:
            console.log("SET_GET_CATEGORIES_REQUESTED")
            console.log(action.data)
            return {...state, categoriesList: action.data, loading: false}; 
            
        default:
            return state;
    }
}