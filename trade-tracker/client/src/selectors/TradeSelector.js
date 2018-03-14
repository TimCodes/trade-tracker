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
);


const trades                  = state => state.trades.trades;
const historicalTradesFilters = state => state.trades.historicalTradesFilters;

const getHistoricalTrades     = (trades, filters) => {
     console.log(" --- get historical trades firing ---")
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
    return  htrades.filter(t => t.result == "Loss" );
};

export const historicalLossingTrades = createSelector(
    [historicalTradesSlector],
    getLosses
);






