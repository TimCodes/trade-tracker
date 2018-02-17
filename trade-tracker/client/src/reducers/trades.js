const defaultState = {
    trades: [],
    filteredTrades: []
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
        default:
          return state;
      }
}

export default Trades;