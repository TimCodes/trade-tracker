const defaultState = {
    trades: [],
    filteredTrades: [],
    visibilityFilters: [],
    historicalTradesFilters : []
}

const Trades = (state = defaultState, action) => {

    switch (action.type) {
        case 'RECIEVE_TRADES':
        console.log("--- reducer recieve trades ---", action)
          return {
            ...state,
            trades : action.payLoad
        }

        case 'RECIEVE_FILTERED_TRADES':
           return {
            ...state,
            filteredTrades : action.payLoad
        }
        
        case 'ADD_TRADE' :
            return {
               ...state,
               trades : [...state.trades, action.payLoad]
                       
        }

        case 'DELETE_TRADE' :
            return {
               ...state,
               trades : state.trades.filter(trade => trade["_id"] !== action.payLoad)
                       
        }

        case 'ADD_VISIBILITY_FILTER':
          return {
           ...state,
           visibilityFilters:  [...state.visibilityFilters, action.payLoad ]
        }

        case 'UPDATE_VISIBILITY_FILTER':
        return {
         ...state,
         visibilityFilters: state.visibilityFilters.map((filter) => {
             if(filter.id === action.payLoad.id){
                 return Object.assign({}, filter, {
                     value: action.payLoad.value
                 })
             }
         })
        }
      
        
        case 'DELETE_VISIBILITY_FILTER':
        return {
         ...state,
         visibilityFilters:  state.visibilityFilters.filter(filter => filter.id != action.payLoad)
        }
      
        
        case 'SET_HISTORICAL_FILTERS':
          return {
           ...state,
           historicalTradesFilters: action.payLoad
        }  

        default:
          return state;
      }
}

export default Trades;