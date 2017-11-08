import React, { Component } from 'react';
import { Sidebar, Header, Segment, Button, Menu,  Icon } from 'semantic-ui-react'
import { Provider } from 'react-redux'
import logo from './logo.svg';
import './App.css';

import * as graders from "./actions/GraderActions"

// /import store from './store'
import Table from './table'
import QualifierForm from './QualifierForm'
import TrackerForm from './TrackingForm'
import FormModal from './FormModal'
import ClockWall from './ClockWall'

import TradesTable from './TradesTable'

import store from './store'

import * as trackerActions from './actions/TrackerActions'



class App extends Component {
  constructor(props){
    super(props);
    this.state = { visible: false, showFormModal : false }

    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.toggleFormModal  = this.toggleFormModal.bind(this)

    console.log('---- actions -----', trackerActions)

   
    
  }

  componentDidMount(){
    console.log("component mounted ")
    trackerActions.insertTrackedTrade({
      
      "symbol": "EURUSD",
      "timeFrame": "5M"
    
    })
    .then(console.log)
  }
 
  toggleVisibility () {
      this.setState({ visible: !this.state.visible })
  }
  toggleFormModal () {
    this.setState({ showFormModal : !this.state.showFormModal })
 }
 
 
  render() {
    const { visible, showFormModal } = this.state
    return (
      <Provider store={store}>
      <div className="ui container fluid app" >    
      <Sidebar.Pushable as={Segment} >
        <Header as='h3' block>
         <Button onClick={this.toggleVisibility} icon="ellipsis vertical"></Button>
          Trade Anaylist 
        </Header>
          <Sidebar as={Menu} animation='push' width='thin' visible={visible} icon='labeled' vertical inverted>
          <Button onClick={this.toggleVisibility} icon="chevron left" floated='right'></Button>
            <Menu.Item name='home'>
              <Icon name='home' />
               Trade Tracker
            </Menu.Item>
            <Menu.Item name='gamepad'>
              <Icon name='gamepad' />
              Games
            </Menu.Item>
            <Menu.Item name='camera'>
              <Icon name='camera' />
              Channels
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
           <Segment basic textAlign='right'>
              <Button icon="add square" />
              <Button icon="compose"  onClick = {this.toggleFormModal}/>              
            </Segment>
            <Segment basic>
              <ClockWall></ClockWall>
             <Table></Table>
             <FormModal show= {showFormModal} close = {this.toggleFormModal} title = "qualify s/d setup">
                <TrackerForm></TrackerForm>
             </FormModal> 
             <iframe 
              src="https://sslecal2.forexprostools.com?columns=exc_flags,exc_currency,exc_importance,exc_actual,exc_forecast,exc_previous&features=datepicker,timezone&countries=25,32,6,37,72,22,17,39,14,10,35,43,56,36,110,11,26,12,4,5&calType=week&timeZone=55&lang=1" 
              width="650" height="467" frameborder="0" allowtransparency="true" marginwidth="0" marginheight="0">
             </iframe>
             <TradesTable store = {store}></TradesTable>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
     
      </div>
      </Provider>
    );
  }
}

export default App;
