import React, { Component } from 'react';
import { Sidebar, Header, Segment, Button, Menu,  Icon } from 'semantic-ui-react'


import QualifierForm from './QualifierForm'
import TrackerForm from './TrackingForm'
import FormModal from './FormModal'
import ClockWall from './ClockWall'
import Tracking from './Tracking'


import TradesTable from './TradesTable'

class Home extends Component {
    constructor(props){
        super(props);
        this.state = { visible: false, showFormModal : false }
    
        
      
        
    }
    render() {
        const { visible, showFormModal } = this.state
        return (
            <div>
              {/* <iframe 
              src="https://sslecal2.forexprostools.com?columns=exc_flags,exc_currency,exc_importance,exc_actual,exc_forecast,exc_previous&features=datepicker,timezone&countries=25,32,6,37,72,22,17,39,14,10,35,43,56,36,110,11,26,12,4,5&calType=week&timeZone=55&lang=1" 
              width="650" height="467" frameborder="0" allowtransparency="true" marginwidth="0" marginheight="0">
             </iframe> */}
              {/* <Segment basic >
                <Button icon="add square" />
                <Button icon="compose"  onClick = {this.toggleFormModal}/>   
             </Segment>   */}
            <Tracking></Tracking>
            
              <FormModal show= {showFormModal} close = {this.toggleFormModal} title = "qualify s/d setup">
                  <TrackerForm></TrackerForm>
              </FormModal> 
                
            </div>
        );
    }
}

export default Home;