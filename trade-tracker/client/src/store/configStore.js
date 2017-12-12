import {applyMiddleware, combineReducers, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import mainReducer from '../reducers'

const middleWare = applyMiddleware(thunk, createLogger());
const store = createStore(mainReducer, middleWare);

export default store;
