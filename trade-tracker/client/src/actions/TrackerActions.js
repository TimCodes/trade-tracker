
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

export const fetchTrackedTrades = () => {
    console.log('--- get treardes ---')
    return trackerAxios.get('/trades?status=Tracking')
    .then(res => {
        console.log('trades gotton', res)
        console.log(res)
        return res.data.data
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

export const updateTrackedTrade = (tradeId) => {};

export const deleteTrackedTrade = (tradeId) => {};


