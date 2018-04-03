const defaultState = {
    marketOptions : [
        {
            key   : "Forex",
            value : "Forex",
            text  : "Forex"
        },
        {
            key   : "Stock",
            value : "Stock",
            text  : "Stock"
        },
    ],
    timeFrameOptions :[
        {
            key   : "1m",
            value : "1m",
            text  : "1m"
        },
        {
            key   : "5m",
            value : "5m",
            text  : "5m"
        },
        {
            key   : "15m",
            value : "15m",
            text  : "15m"
        },
        {
            key   : "1h",
            value : "1h",
            text  : "1h"
        },
        {
            key   : "4h",
            value : "4h",
            text  : "4h"
        },
        {
            key   : "1D",
            value : "1D",
            text  : "1D"
        },
        {
            key   : "All",
            value : "",
            text  : "All"
        }
    ]
    
    
}

const tradeFormOptions = (state = defaultState, action) => {

    switch (action.type) {
        case "SET_FORM_OPTIONS":
            
            return {

            }
            break;
    
        default:
            return state;
            break;
    }

}

export default tradeFormOptions;