import {GET_CATEGORIES_REQUESTED} from './actions/types';
import { takeLatest } from 'redux-saga/effects'
import { handleGetCategories } from './handlers/categoriesHandler';


export function* watcherSaga() {
    console.log("watcherSaga")
    yield takeLatest(GET_CATEGORIES_REQUESTED, handleGetCategories)
}