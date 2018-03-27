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

let statusOptions = [
    {
        key   : "Tracking",
        value : "Tracking",
        text  : "Tracking"
    },
    {
        key   : "Open",
        value : "Open",
        text  : "Open"
    },
    {
        key   : "Both",
        value : "",
        text  : "Both"
    }

]
class TrackingMenu extends Component {
    constructor(props) {
        super(props);
        this.state = { activeItem: 'Tracking' };
        this.handleSetupChange  = this.handleSetupChange.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
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

    handleStatusChange(e, data){
        console.log(e)
        console.log(data.value)
        console.log(' status change change')
    }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render() {
        const { activeItem } = this.state
        return (
        <Menu  inverted color='blue'>
            <Menu.Menu>
                <Dropdown placeholder='Status' item options={statusOptions}  onChange={(e,data) =>  this.props.handleStatusChange(data.value)} />
            </Menu.Menu>     
            <Menu.Menu >
                <Dropdown placeholder='Setup Type' item options={setupOptions}  onChange={this.handleSetupChange} />
            </Menu.Menu> 
            <Menu.Menu position='right'>
             <Menu.Item>
                <Icon  name='add circle' inverted size='large' onClick={this.props.handleAddNew} />
             </Menu.Item> 
            </Menu.Menu>
        </Menu>
        );
    }
}


export default TrackingMenu;