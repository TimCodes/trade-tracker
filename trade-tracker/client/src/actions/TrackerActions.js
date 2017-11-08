
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

export const fetchTrackedTrades = () => {};

export const fetchTrackedTrade  = (tradeId) => {};

export const updateTrackedTrade = (tradeId) => {};

export const deleteTrackedTrade = (tradeId) => {};


