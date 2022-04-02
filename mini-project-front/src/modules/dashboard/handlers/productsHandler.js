import {call, put} from 'redux-saga/effects';
import {requestSearchProductsByName} from '../requests';
import {setSearchProductsByName} from '../actions';

export function* handleSearchProducts(action) {
    console.log("handleSearchProducts")
    console.log(action)
    try {
        console.log(action)
        const response = yield call(requestSearchProductsByName, action.name);
        console.log(response)
        yield put(setSearchProductsByName(response))
    } catch(error) {
        console.log(error)
    }
}
