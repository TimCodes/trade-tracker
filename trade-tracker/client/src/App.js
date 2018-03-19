import React, { Component } from 'react';
import {  Segment, Menu, Container } from 'semantic-ui-react'
import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import { Provider } from 'react-redux'



// /import store from './store'

import Home from './components/Home'
import Tracking from './components/Tracking'
import History from './components/History/History'
import ClockWall from './components/ClockWall'

import store from './store/configStore'
import * as trackerActions from './actions/TrackerActions'



class App extends Component {
  constructor(props){
    super(props);
    this.state = { }

    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.toggleFormModal  = this.toggleFormModal.bind(this)

    console.log('---- actions -----', trackerActions)

    
  }

componentDidMount(){
    
}
 
toggleVisibility () {
      this.setState({ visible: !this.state.visible })
}


toggleFormModal () {
    this.setState({ showFormModal : !this.state.showFormModal })
}
 
 
render() {
   
    return (
      <Provider store={store}>
       <BrowserRouter>
       <Container fluid >
        <Menu pointing borderless inverted >
          <Menu.Item><NavLink to="/">Tracking</NavLink></Menu.Item>
          {/* <Menu.Item><NavLink to="/tracking">Tracking</NavLink></Menu.Item> */}
          <Menu.Item><NavLink to="/history">History</NavLink></Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item><ClockWall></ClockWall> </Menu.Item> 
          </Menu.Menu> 
        </Menu>
         <Segment padded basic>
           <Route path="/" exact render = { () => <Home /> }  />
           <Route path="/tracking"  render = { () => <Tracking /> } />
           <Route path="/history"  render = { () => <History /> } />
         </Segment> 
        </Container> 
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
