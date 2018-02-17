import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';

import qualifier from './qualifier'
import {trackingForm} from './trackingform'
import trades from './trades'


const mainReducer = combineReducers({
    trades,
    form: formReducer,
    trackingForm
});

export default mainReducer