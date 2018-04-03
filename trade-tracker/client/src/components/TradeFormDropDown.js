import React, { Component } from 'react';
import {Dropdown} from 'semantic-ui-react'

class TradeFormDropDown extends Component {
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e, vals){
        vals.name= this.props.name;
        this.props.onChange(e, vals);
    }
    render() {
        return  <Dropdown placeholder={this.props.name} 
                          item 
                          selection
                          options={this.props.options}  
                          onChange={this.onChange} 
                          fluid 
                 />;
    }
}

export default TradeFormDropDown;



