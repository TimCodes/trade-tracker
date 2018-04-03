import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Checkbox, Form, Input, Image } from 'semantic-ui-react'
import Dropzone from 'react-dropzone'

import TradeFormDropDown from './TradeFormDropDown'
import TimeFrameDropDown from './TimeFrameDropDown'
import TimeOfDayDropDown from './TimeOfDayDropDown'

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
        this.props.handleSubmit(this.state)
    } 

    handleFormChange(e, vals){
        console.log("--- form change ---", Object.keys(e))
        console.log("--- form change value ---", vals)
        console.log("--- form change name ---", e.target.name)
        
        
        this.setState({ [vals.name] : vals.value });
        this.props.setTrackingForm({ [vals.name] : vals.value })
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
        let {tradeFormOptions} = this.props;
    return (
            <Form>
                <Form.Field>
                    <label>Pair</label>
                    <Input placeholder='EurUsd' name="symbol" onChange={this.handleFormChange} value={this.state.symbol} />
                </Form.Field>
                <Form.Field>
                    <label>Time Frame</label>
                    <TradeFormDropDown name="timeFrame" handleTimeFrameChange={this.handleFormChange} options={tradeFormOptions.timeFrameOptions}  value={this.state.timeFrame} />
                </Form.Field>
                <Form.Field>
                    <label>Market</label>
                    <TradeFormDropDown value={this.state.market} options={tradeFormOptions.marketOptions} name={"Market"} onChange={this.handleFormChange} />
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
                    <label>Notes</label>
                    <Input placeholder='Looking for Fractal Retest '  name="notes" onChange={this.handleFormChange}  value={this.state.notes}/>
                </Form.Field>
                <Form.Field>
                    <label>chart</label>
                    <Dropzone onDrop={this.onDrop}>
                    </Dropzone>
                    <Image src={ this.state.chartUri || this.state.chartFile.preview} alt=""/>
                </Form.Field>
                <Button type='submit' onClick={this.handleSubmit}>Submit</Button>
            </Form>
        )
    } 
}


const mapStateToProps = (state) => (
  {    
    trackingForm: state.trackingForm,
    tradeFormOptions : state.tradeFormOptions 
  } 
)

const mapDispatchToProps = (dispatch) => (
    {
        setTrackingForm : (trackingForm) => {
            return dispatch({ type: 'SET_FORM_VALUES', payLoad:trackingForm })
        }
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(TrackerForm)