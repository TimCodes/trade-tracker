import React, { Component } from 'react';
//import {Button, Segment} from 'semantic-ui-react';
import Tracking from './Tracking'


class Home extends Component {
    constructor(props){
        super(props);
        this.state = { visible: false, showFormModal : false }
    }
    
    render() {
        const { showFormModal } = this.state
        return (
            <div>
              {/* <iframe 
              src="https://sslecal2.forexprostools.com?columns=exc_flags,exc_currency,exc_importance,exc_actual,exc_forecast,exc_previous&features=datepicker,timezone&countries=25,32,6,37,72,22,17,39,14,10,35,43,56,36,110,11,26,12,4,5&calType=week&timeZone=55&lang=1" 
              width="650" height="467" frameborder="0" allowtransparency="true" marginwidth="0" marginheight="0">
             </iframe> */}
          
            <Tracking></Tracking>
            
             
                
            </div>
        );
    }
}

export default Home;