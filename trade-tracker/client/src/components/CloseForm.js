import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Checkbox, Form, Input, Image } from 'semantic-ui-react'
import Dropzone from 'react-dropzone'

import * as actions from '../actions/TrackerActions'

class  TrackerForm extends Component {
    constructor(props){
        super(props);
        this.onDrop = this.onDrop.bind(this);
        this.state = {
            chartFile : {},
            chartData: null
        }
        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleSubmit     = this.handleSubmit.bind(this);
    }

    componentWillMount(){
        console.log('--- mounted ---', this.props)
        this.setState(this.props.trackingForm)
    }

    handleSubmit(){
        console.log(this.state)
        this.props.handleSubmit(this.setState)
    } 

    handleFormChange(e, {value}){
        console.log("--- form change ---", e.target)
        this.setState({ [e.target.name] : value });
        this.props.setTrackingForm({ [e.target.name] : value })
    }  

    onDrop(acceptedFiles, rejectedFiles) {
        const reader = new FileReader();
        this.setState({chartFile: acceptedFiles[0]})
        reader.onload = () => {
            const fileAsBinaryString = reader.result;
            // do whatever you want with the file content
            console.log("---- base 64 woot ---",fileAsBinaryString)
            this.setState({chartData: fileAsBinaryString})
        };
        reader.onabort = () => console.log('file reading was aborted');
        reader.onerror = () => console.log('file reading has failed');
        reader.readAsDataURL(acceptedFiles[0]);

    }
    
    render() {
    return (
            <Form>
                <Form.Field>
                    <label>Pair</label>
                    <Input placeholder='EurUsd' name="symbol" onChange={this.handleFormChange} value={this.state.symbol} />
                </Form.Field>
                <Form.Field>
                    <label>Time Frame</label>
                    <Input placeholder='5m' name="timeFrame" onChange={this.handleFormChange} value={this.state.timeFrame} />
                </Form.Field>
                <Form.Field>
                    <label>Core Strategy</label>
                    <Input placeholder='goodman' name="strategy" onChange={this.handleFormChange}  value={this.state.strategy}/>
                </Form.Field>
                <Form.Field>
                    <label>Setup Type</label>
                    <Input placeholder='goldilocks'  name="setup"  onChange={this.handleFormChange} value={this.state.setup}/>
                </Form.Field>
                <Form.Field>
                    <label>Status</label>
                    <Input placeholder='Open'  name="status"  onChange={this.handleFormChange} value={this.state.status}/>
                </Form.Field>
                <Form.Field>
                    <label>Tags</label>
                    <Input placeholder='goldilocks'  name="tags"  onChange={this.handleFormChange} value={this.state.tags}/>
                </Form.Field>
                <Form.Field>
                    <label>Time Of Day</label>
                    <Input placeholder='asian'  name="timeOfDay" onChange={this.handleFormChange} value={this.state.timeOfDay} />
                </Form.Field>
                <Form.Field>
                    <label>RR</label>
                    <Input placeholder='2/1'  name="rr" onChange={this.handleFormChange}  value={this.state.rr}/>
                </Form.Field>
                <Form.Field>
                    <label>Quanity</label>
                    <Input placeholder='1000'  name="quantity" onChange={this.handleFormChange}  value={this.state.quantity}/>
                </Form.Field>
                <Form.Field>
                    <label>Open Price</label>
                    <Input placeholder='1000'  name="openPrice" onChange={this.handleFormChange}  value={this.state.openPrice}/>
                </Form.Field>
                <Form.Field>
                    <label>Close Price</label>
                    <Input placeholder='1200'  name="closePrice" onChange={this.handleFormChange}  value={this.state.closePrice}/>
                </Form.Field>
                <Form.Field>
                    <label>Stop Loss</label>
                    <Input placeholder='1.000'  name="stopLoss" onChange={this.handleFormChange}  value={this.state.stopLoss}/>
                </Form.Field>
                <Form.Field>
                    <label>Take Profit</label>
                    <Input placeholder='1.200'  name="takeProfit" onChange={this.handleFormChange}  value={this.state.takeProfit}/>
                </Form.Field>
                <Form.Field>
                    <label>Notes</label>
                    <Input placeholder='Looking for Fractal Retest '  name="notes" onChange={this.handleFormChange}  value={this.state.notes}/>
                </Form.Field>
                <Form.Field>
                    <label>chart</label>
                    <Dropzone onDrop={this.onDrop}>
                    </Dropzone>
                    <Image src={ this.state.chartUri || this.state.chartFile.preview} alt=""/>
                </Form.Field>
                <Button type='submit' onClick={this.handleSubmit}>Close and Save</Button>
            </Form>
        )
    } 
}


const mapStateToProps = (state) => (
  {    
    trackingForm: state.trackingForm
  } 
)

const mapDispatchToProps = (dispatch) => (
    {
        setTrackingForm : (trackingForm) => {
            return dispatch({ type: 'SET_FORM_VALUE', payLoad:trackingForm })
        }
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(TrackerForm)