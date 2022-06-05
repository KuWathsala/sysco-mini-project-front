import {call, put} from 'redux-saga/effects';
import {requestGetUserDetatils} from '../requests';
import {requestSetUerDetails} from '../actions';

export function* handleUserDetails(action) {
    console.log("handleUserDetails")
    try {
        console.log(action)
        const response = yield call(requestGetUserDetatils, action.name);
        console.log(response)
        yield put(requestSetUerDetails(response))
    } catch(error) {
        console.log(error)
    }
}
