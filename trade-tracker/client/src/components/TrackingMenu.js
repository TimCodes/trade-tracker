import React, { Component } from 'react';
import { Menu, Segment, Icon, Dropdown} from 'semantic-ui-react'

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
    }

]
class TrackingMenu extends Component {
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
            <Menu.Item name='Tracking' active={activeItem === 'Tracking'} onClick={this.handleItemClick} />
            <Menu.Item name='Open' active={activeItem === 'Open'} onClick={this.handleItemClick} />
            <Menu.Item name='Both' active={activeItem === 'Both'} onClick={this.handleItemClick} />
            <Menu.Menu position='left'>
            <Dropdown placeholder='Setup Type' item options={setupOptions}  onChange={this.handleSetupChange} />
            </Menu.Menu> 
            <Menu.Menu tabular>
                <Menu.Item name='bio' active={activeItem === 'bio'} onClick={this.handleItemClick} />
                <Menu.Item name='photos' active={activeItem === 'photos'} onClick={this.handleItemClick} />
            </Menu.Menu>   
            <Menu.Menu position='right'>
             <Menu.Item>
                <Icon  name='add circle' inverted size='large' onClick={this.props.toggleFormModal} />
             </Menu.Item> 
            </Menu.Menu>
        </Menu>
        );
    }
}


export default TrackingMenu;