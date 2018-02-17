
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
