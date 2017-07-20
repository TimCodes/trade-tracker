import React, { Component } from 'react';
import { Sidebar, Header, Segment, Button, Menu,  Icon } from 'semantic-ui-react'
import logo from './logo.svg';
import './App.css';
import Table from './table'

class App extends Component {
  constructor(props){
    super(props);
    this.state = { visible: false }

    this.toggleVisibility = this.toggleVisibility.bind(this)
  }
 toggleVisibility () {
    this.setState({ visible: !this.state.visible })
 }   
  render() {
    const { visible } = this.state
    return (
      <div className="ui container fluid app" >    
      <Sidebar.Pushable as={Segment} >
        <Header as='h3' block>
         <Button onClick={this.toggleVisibility} icon="ellipsis vertical"></Button>
          Trade Anaylist 
        </Header>
          <Sidebar as={Menu} animation='push' width='thin' visible={visible} icon='labeled' vertical inverted>
          <Button onClick={this.toggleVisibility} icon="chevron left" ></Button>
            <Menu.Item name='home'>
              <Icon name='home' />
              Home
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
              <Button icon="compose" />              
            </Segment>
            <Segment basic>
             <Table></Table>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
     
      </div>
    );
  }
}

export default App;
