const defaultState = {
    trades: [],
    filteredTrades: [],
    visibilityFilter: null,
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

        case 'SET_VISIBILITY_FILTER':
          return {
           ...state,
           visibilityFilter: action.payLoad
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