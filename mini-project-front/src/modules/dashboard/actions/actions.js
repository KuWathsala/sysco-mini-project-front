import {
    GET_CATEGORIES_REQUESTED, 
    SET_GET_CATEGORIES_REQUESTED,
    SEARCH_PRODUCTS_BY_NAME_REQUESTED,
    SET_SEARCH_PRODUCTS_BY_NAME_REQUESTED,
    GET_USER_DETAILS_REQUESTED,
    SET_USER_DETAILS_REQUESTED,
    CHANGE_CART_ID
} from './types';
// actions are the types to need to do change the state in store

export const requestGetCategories = () => ({
    type: GET_CATEGORIES_REQUESTED
});

export const requestSetCategories = (data) => ({
    type: SET_GET_CATEGORIES_REQUESTED,
    data
});

export const requestSearchProductsByName = (name) => ({
    type: SEARCH_PRODUCTS_BY_NAME_REQUESTED,
    name
});

export const setSearchProductsByName = (response) => ({
    type: SET_SEARCH_PRODUCTS_BY_NAME_REQUESTED,
    response
});

export const requestGetUerDetails = (data) => ({
    type: GET_USER_DETAILS_REQUESTED,
    data
});

export const requestSetUerDetails = (data) => ({
    type: SET_USER_DETAILS_REQUESTED,
    data
});

export const changeCartId = (cart_id) => ({
    type: CHANGE_CART_ID,
    cart_id
});

