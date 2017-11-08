import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';

import qualifier from './qualifier'

const trades = (state = {}, action) => {

    switch (action.type) {
        case "RECEIVE_POSTS":
            
            return {

            }
            break;
    
        default:
            return state;
            break;
    }
};


const mainReducer = combineReducers({
    trades,
    form: formReducer
});

export default mainReducer