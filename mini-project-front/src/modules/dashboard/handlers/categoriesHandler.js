import {call, put} from 'redux-saga/effects';
import {requestGetCategories} from '../requests';
import {requestSetCategories} from '../actions';

export function* handleGetCategories(action) {
    console.log("handleGetCategories")
    try {
        const response = yield call(requestGetCategories);
        console.log(response)
        const {data} = response; 
        yield put(requestSetCategories(data))
    } catch(error) {
        console.log(error)
    }
}