import {GET_CATEGORIES_REQUESTED, SET_GET_CATEGORIES_REQUESTED} from '../actions/types';
//change previous state to next state
//need to define initial state to go to next state
const initialState = {
    categories: []
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
            const {categories} = action.data;
            return {...state, categories};
            
        default:
            return state;

    }
}
