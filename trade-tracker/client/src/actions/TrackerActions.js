
import axios from 'axios'
import config from '../config/config.json'

let BASE_URL = config.BASE_URL;
console.log("--- base url ---", config)
let trackerAxios = axios.create({
    baseURL : BASE_URL
})

export const insertTrackedTrade = (trade) => {
    console.log("-- insert trade ---")
   return  trackerAxios.post('/trades', trade)
     .then(console.log)
     .catch(console.log)
};

export const fetchTrackedTrades = () => (dispatch) => {
    console.log('--- get treardes ---')
    return trackerAxios.get('/trades')
    .then(res => {
        console.log('trades gotton', res)
        dispatch({type: "RECIEVE_TRADES", payLoad:  res.data.data})
    })
    .catch(console.log)
};

export const fetchTrackedTrade  = (tradeId) => {
    console.log('--- get treardes ---')
    return trackerAxios.get(`/trades/${tradeId}`)
    .then(res => {
        console.log('trades gotton', res)
        console.log(res)
        return res.data
    })
    .catch(console.log)
};

export const deleteTrackedTrade  = (tradeId) => (dispatch) => {
    console.log('--- get treardes ---')
    return trackerAxios.delete(`/trades/${tradeId}`)
    .then(res => {
       dispatch({type: "DELETE_TRADE", payLoad:  res.data.data})     
    })
    .catch(console.log)
};


export const updateTrackedTrade = (tradeId, trade) => {
    return  trackerAxios.put(`/trades/${tradeId}`, trade)
    .then(console.log)
    .catch(console.log)
};

export const getFiltered = (field, value) => {
    return []
}

export const setTradesFilter = (filter) => dispatch => {
    console.log("---- set filter -----")
    dispatch({type: 'SET_VISIBILITY_FILTER', payLoad: filter });
}

