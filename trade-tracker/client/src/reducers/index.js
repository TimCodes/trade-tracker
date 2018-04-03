import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';

import qualifier from './qualifier'
import tradeFormOptions from './tradeFormOptions'

import {trackingForm} from './trackingform'
import trades from './trades'


const mainReducer = combineReducers({
    trades,
    form: formReducer,
    trackingForm,
    tradeFormOptions 
});

export default mainReducer