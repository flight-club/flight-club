import {createStore, combineReducers, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import reducer from './reducer';
import flightReducer from './flightReducer';

const rootReducer = combineReducers({
   reducer,
   flightReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));