const defaultState = {

}

const qualifier = (state = {}, action) => {

    switch (action.type) {
        case "RECEIVE_POSTS":
            
            return {

            }
            break;
    
        default:
            return state;
            break;
    }

}

export default qualifier;