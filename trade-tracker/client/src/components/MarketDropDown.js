import React, { Component } from 'react';
import {Dropdown} from 'semantic-ui-react'

let marketOptions = [
    {
        key   : "FOREX",
        value : "FOREX",
        text  : "FOREX"
    },
    {
        key   : "STOCKS",
        value : "STOCKS",
        text  : "STOCKS"
    },
    {
        key   : "All",
        value : "",
        text  : "All"
    }
];



const MarketDropDown = ({handleMarketChange}) => (
    <Dropdown placeholder='Market' item options={marketOptions}  onChange={handleMarketChange} />
);

export default MarketDropDown;

