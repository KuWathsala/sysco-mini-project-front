import {
    GET_USER_DETAILS_REQUESTED,
    SET_USER_DETAILS_REQUESTED,
    CHANGE_CART_ID
} from '../actions/types';

//change previous state to next state
//need to define initial state to go to next state
const initialState = {
    loading: true,
    user: {},
    cart_id: 0
};

export const userReducer = (state=initialState, action) => {
    switch(action.type) {

        case GET_USER_DETAILS_REQUESTED:
            console.log(GET_USER_DETAILS_REQUESTED)
            return {...state};

            case SET_USER_DETAILS_REQUESTED:
                console.log(SET_USER_DETAILS_REQUESTED)
                console.log(action.data.response.data)
                return {...state, user: action.data.response.data, loading: false};

            case CHANGE_CART_ID:
                console.log(CHANGE_CART_ID)
                return {...state, cart_id: action.cart_id};

        default:
            return state;
    }
}