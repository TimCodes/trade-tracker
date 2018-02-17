import React, { Component } from 'react';
import { Menu, Segment, Icon, Dropdown} from 'semantic-ui-react'

let strategyOptions = [
    {
        key   : "GOODMAN",
        value : "GOODMAN",
        text  : "GOODMAN"
    },
    {
        key   : "PriceAction",
        value : "PriceAction",
        text  : "PriceAction"
    },
    {
        key   : "Momentum",
        value : "Momentum",
        text  : "Momentum"
    },
    {
        key   : "All",
        value : "All",
        text  : "All"
    }

];

let resultOptions = [
    {
        key   : "WIN",
        value : "WIN",
        text  : "WIN"
    },
    {
        key   : "LOSS",
        value : "LOSS",
        text  : "LOSS"
    },
    {
        key   : "All",
        value : "All",
        text  : "All"
    }
];

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
        value : "All",
        text  : "All"
    }
];


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
        value : "All",
        text  : "All"
    }

];

let setupOptions = [
    {
        key : "66",
        value : "66",
        text : "66"
    },
    {
        key : "GLDLKS",
        value : "GLDLKS",
        text : "GLDLKS"
    },
    {
        key : "POR",
        value : "POR",
        text : "POR"
    },
    {
        key   : "All",
        value : "All",
        text  : "All"
    }
]


let instrumentOptions = [ 

    {
        key   : "EURUSD",
        value : "EURUSD",
        text  : "EURUSD"
    },
    {
        key   : "UGAZ",
        value : "UGAZ",
        text  : "UGAZ"
    }

];


class HistoryMenu extends Component {
    constructor(props) {
        super(props);
        this.state = { activeItem: 'Tracking' }
        this.handleSetupChange = this.handleSetupChange.bind(this)
    }

    componentWillMount() {

    }

    componentDidMount() {

    }
    handleSetupChange(e, data){
        console.log(e)
        console.log(data)
        console.log('change')
    }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render() {
        const { activeItem } = this.state
        return (
        <Menu  inverted color='blue'>
            <Dropdown placeholder='Market' item options={marketOptions}  onChange={this.handleSetupChange} />
            <Dropdown placeholder='Instrument' item options={instrumentOptions}  onChange={this.handleSetupChange} />       
            <Dropdown placeholder='Result' item options={resultOptions}  onChange={this.handleSetupChange} />            
            <Dropdown placeholder='TimeOFDay' item options={timeOfDayOptions}  onChange={this.handleSetupChange} />                              
            <Dropdown placeholder='Strategy' item options={strategyOptions}  onChange={this.handleSetupChange} /> 
            <Dropdown placeholder='Setup Type' item options={setupOptions}  onChange={this.handleSetupChange} />      
        </Menu>
        );
    }
}


export default HistoryMenu;