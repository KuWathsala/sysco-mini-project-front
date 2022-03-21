import {GET_CATEGORIES_REQUESTED, SET_GET_CATEGORIES_REQUESTED} from './types';
// actions are the types to need to do change the state in store

export const requestGetCategories = () => ({
    type: GET_CATEGORIES_REQUESTED
});

export const requestSetCategories = (data) => ({
    type: SET_GET_CATEGORIES_REQUESTED,
    data
});

