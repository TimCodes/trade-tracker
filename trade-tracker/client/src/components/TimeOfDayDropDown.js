import React, { Component } from 'react';
import {Dropdown} from 'semantic-ui-react'

let timeOfDayOptions = [
    {
        key   : "LO",
        value : "LO",
        text  : "LO"
    },
    {
        key   : "LC",
        value : "LC",
        text  : "LC"
    },
    {
        key   : "NYO",
        value : "NYO",
        text  : "NYO"
    },
    {
        key   : "NYC",
        value : "NYC",
        text  : "NYC"
    },
    {
        key   : "AO",
        value : "AO",
        text  : "AO"
    },
    {
        key   : "AC",
        value : "AC",
        text  : "AC"
    },
    {
        key   : "All",
        value : "",
        text  : "All"
    }

];



const TimeOfDayDropDown = ({handleTODChange}) => (
    <Dropdown placeholder='Market' item options={timeOfDayOptions}  onChange={handleTODChange} />
);

export default TimeOfDayDropDown;