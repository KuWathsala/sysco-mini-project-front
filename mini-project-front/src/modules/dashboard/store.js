import {combineReducers, createStore, applyMiddleware} from 'redux';
import { categoriesReducer, productsReducer } from './reducers';
import createSagaMiddleware from 'redux-saga'
import {watcherSaga} from './rootSaga'

const rootReducer = combineReducers({
    categories: categoriesReducer,
    products: productsReducer
})
// Note: passing middleware as the last argument to createStore requires redux@>=3.1.0
const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware];

const store = createStore(rootReducer, {}, applyMiddleware(...middleware));
sagaMiddleware.run(watcherSaga);

export default store;
 