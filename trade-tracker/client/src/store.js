import { createStore, applyMiddleware, combineReducers } from 'redux'
import createLogger from 'redux-logger'
import { Reducers as gridReducers } from 'react-redux-grid'
import {data} from "./data/demodata";

const loggerMiddleware = createLogger();

const initialState = {
    ready: false,
    pageSize: 10,
    data: data,
    recordsRemaining: [],
    recordsRemoved: []
  };

  function reducer(state = initialState, action = {}) {
    switch (action.type) {
      case 'APP_READY':
        return {
          ...state,
          ready: true
        };
       case 'PAGING_CHANGE_LIMIT':
        return {
          ...state,
          pageSize: action.newPageLimit
        };  
      case 'GRID_ROWS_BULK_DELETE':
        return {
          ...state,
          data: action.newRows
        };  
       case 'BULK_DISPLAY':
        return {
          ...state,
          recordsRemaining: action.recordsRemaining,
          recordsRemoved: action.recordsRemoved
        };   
       case "@@react-redux-grid/SET_DATA":
       return {
          ...state,
          recordsRemaining: [],
          recordsRemoved: []
        };
      default:
        return state;
    }
  }

const root = (state = [], action = {}) => {
    switch (action.type) {
        case 'rara':
            return state
            break;
    
        default:
           return state;
            break;
    }
}

const rootReducer = combineReducers({
    app: root,
    bulkSelection: reducer,
    ...gridReducers
})

export function configureStore() {
    return createStore(
      rootReducer,
      applyMiddleware(
        createLogger
      )  
    )
}

const store = configureStore();

export default store;