import {createStore, combineReducers, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import reducer from './reducer';

const rootReducer = combineReducers({
   reducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));