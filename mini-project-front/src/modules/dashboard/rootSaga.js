import {GET_CATEGORIES_REQUESTED, SEARCH_PRODUCTS_BY_NAME_REQUESTED, GET_USER_DETAILS_REQUESTED} from './actions/types';
import { takeLatest } from 'redux-saga/effects';
import { handleGetCategories,handleSearchProducts, handleUserDetails,} from './handlers';


export function* watcherSaga() {
    console.log("watcherSaga")
    yield takeLatest(GET_CATEGORIES_REQUESTED, handleGetCategories);
    yield takeLatest(SEARCH_PRODUCTS_BY_NAME_REQUESTED, handleSearchProducts);
    yield takeLatest(GET_USER_DETAILS_REQUESTED, handleUserDetails)
}