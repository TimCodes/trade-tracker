import { createSelector } from 'reselect'
// should use reselect here?

// reutrn trades that have a Tracking status 
export const selectTrackedTrades = (state) => {
    console.log('select track trades ---- ', state)
    return state.trades.trades.filter(t => t.status === "Tracking");
}

// return trades that have a Open status 
export const selectOpenTrades = (state) => {
 return state.trades.trades.filter(t => t.status === "Open");
}

// return trades that have a Closed status
export const selectClosedTrades = (state) => {
    return state.trades.trades.filter(t => t.status === "Closed");
}

const tradesSelector = state => state.trades.trades;
const tradeFilterSelector = state => state.trades.visibilityFilter;
const getVisibleTrades = (trades, filter) => {
    
    switch(filter){
        case "Open" || "OPEN" : {
          return   trades.filter( t => t.status === "Open")
        }

        case "Tracking" || "Tracking" : {
            return trades.filter( t => t.status === "Tracking")
        }
        
        default: {
            return trades
        }
    }
  
    
    
};

export const visibleTradesSelector = createSelector(
    tradesSelector, // pick off piece of state
    tradeFilterSelector,// pick off piece of state
    getVisibleTrades // last arugment is the func that has our select logic
) 