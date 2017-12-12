const defaultState = {
    chartFile:  "",
    chartData : null, 
    symbol : "", 
    timeFrame: "",
    timeOfDay: "",
    strategy: "",
    setup : "",
    notes : "",
    rr : "",
   
}

export const trackingForm = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_FORM_VALUE':
        console.log('--- change ---', action)
        let newState = Object.assign( {}, state )
        for (const key in action.payLoad) {
            if (action.payLoad.hasOwnProperty(key)) {
                newState[key] = action.payLoad[key];  
            }
        }

        
        return newState;
        default:
        return state
  }
}