import React, { Component } from 'react';
import {Dropdown} from 'semantic-ui-react'

let timeFrameOptions = [
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
];



const TimeFrameDropDown = (props) => { 
    console.log("--- props ----", props)
    return (
    <Dropdown  fluid
               search 
               selection
               name="timeFrame"
               placeholder={props.value || "Time Frame"} 
               options={timeFrameOptions}  
               onChange={props.handleTimeFrameChange} 
    />
)};

export default TimeFrameDropDown;