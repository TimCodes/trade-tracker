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
const tradeFiltersSelector = state => state.trades.visibilityFilters;
const getVisibleTrades = (trades, filters) => {
    
    
    console.log(filters); 
    if(filters){
      let newTrades = trades.filter(trade =>{
          let pass = true;
          filters.forEach( f => {
            let tradeVal = String(trade[f.id])
            console.log('val', tradeVal)
            if(!tradeVal.startsWith(f.value)){
             pass = false
            }
          })
          return pass;
       })
       return newTrades;
  }

  return trades;
    
};


export const visibleTradesSelector = createSelector(
    tradesSelector, // pick off piece of state
    tradeFiltersSelector,// pick off piece of state
    getVisibleTrades // last arugment is the func that has our select logic
);


const trades                  = state => state.trades.trades;
const historicalTradesFilters = state => state.trades.historicalTradesFilters;

const getHistoricalTrades     = (trades, filters) => {
     console.log(" --- get historical trades firing ---")
     console.log(filters); 
      if(filters){
        let newTrades = trades.filter(trade =>{
            let pass = true;
            filters.forEach( f => {
              let tradeVal = String(trade[f.id])
              console.log('val', tradeVal)
              if(!tradeVal.startsWith(f.value)){
               pass = false
              }
            })
            return pass;
         })
         return newTrades;
    }

    return trades;
};

export const historicalTradesSlector = createSelector(
    trades,
    historicalTradesFilters,
    getHistoricalTrades
);

const getTotalPNL = (htrades ) => {
   console.log(" --- h tradeses tuue ---- ", htrades)
   return  htrades.reduce( (accumulator, trade) => accumulator + Number(trade.pnl) || 0, 0 ).toFixed(2);
};

export const historicalTotalPNL = createSelector(
    [historicalTradesSlector],
    getTotalPNL
)

const getWins = (htrades ) => {
     return htrades.filter(t => t.result == "Win" );
};
 
export const historicalWinningTrades = createSelector(
     [historicalTradesSlector],
     getWins
);

const getLosses = (htrades ) => {
    return htrades.filter(t => t.result == "Loss" );
};

export const historicalLossingTrades = createSelector(
    [historicalTradesSlector],
    getLosses
);


export const historicalLossingTradesCount = createSelector(
    [historicalLossingTrades],
    (losingTrades) => losingTrades.length || 0
);


export const historicalWinningTradesCount = createSelector(
    [historicalWinningTrades],
    (winningTrades) => winningTrades.length || 0
);


export const historicalLossingTradesAvgPnl = createSelector(
    [historicalLossingTrades, historicalLossingTradesCount],
    (lossingTrades, lossingCount) =>{
        let totalPnl = lossingTrades.reduce( (accumulator, trade) => accumulator + Number(trade.pnl) || 0, 0 ).toFixed(2);
        return (totalPnl / lossingCount).toFixed(2); 
    }
);

export const historicalWinningTradesAvgPnl = createSelector(
    [historicalWinningTrades, historicalWinningTradesCount],
    (winningTrades, winningCount) =>{
        let totalPnl = winningTrades.reduce( (accumulator, trade) => accumulator + Number(trade.pnl) || 0, 0 ).toFixed(2);
        return (totalPnl / winningCount).toFixed(2); 
    }
);    







