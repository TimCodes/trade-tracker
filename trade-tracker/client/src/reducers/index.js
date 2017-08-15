import {combineReducers} from 'redux';


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
    trades
});

export default mainReducer