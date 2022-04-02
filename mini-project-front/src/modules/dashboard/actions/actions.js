import {
    GET_CATEGORIES_REQUESTED, 
    SET_GET_CATEGORIES_REQUESTED,
    SEARCH_PRODUCTS_BY_NAME_REQUESTED,
    SET_SEARCH_PRODUCTS_BY_NAME_REQUESTED
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

