import React, { Component } from 'react';
import {Card, Image, Label, Segment, Button, Header, Confirm} from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../actions/TrackerActions'
import TrackerForm from './TrackingForm'
import TrackerCardGroup from './TrackerCardGroup'
import CloseForm from './CloseForm'
import FormModal from './FormModal'
import TrackingMenu from './TrackingMenu'
import * as TradeSelectors from '../selectors/Trades'


class Tracking extends Component {

    constructor(props){
        super(props)
        console.log('--- get trades ---')
        this.state = {
             visible: false,
             showTrackingFormModal : false, 
             showCloseFormModal : false, 
             trades: [], 
             showDeleteConfirm : false, 
             currentTradeId: null,
             isEditing: false 
        }
        this.toggleTrackingFormModal = this.toggleTrackingFormModal.bind(this);
        this.toggleCloseFormModal = this.toggleCloseFormModal.bind(this);        
        this.startEdit    = this.startEdit.bind(this)
        this.toggleDeleteConfirm  = this.toggleDeleteConfirm.bind(this);
        this.deleteTrade = this.deleteTrade.bind(this)
        this.handleAddNew = this.handleAddNew.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentWillMount(){
        
        this.props.getAllTrades();
    }
    
    toggleTrackingFormModal(){
        this.setState({ showTrackingFormModal: !this.state.showTrackingFormModal})
    }
      
    toggleCloseFormModal(){
        this.setState({ showCloseFormModal: !this.state.showCloseFormModal})
    }
    
    
    startEdit(trackId){
        console.log('---start edit ----', trackId)
        this.setState({isEditing: true})
        actions.fetchTrackedTrade(trackId)
        .then(r => {
            this.props.setTrackingForm(r)
            return r
        })
        .then( r => this.toggleTrackingFormModal())
     
    }

    startClose(trackId){
        console.log('---start edit ----', trackId)
        this.setState({isEditing: true})
        actions.fetchTrackedTrade(trackId)
        .then(r => {
            this.props.setTrackingForm(r)
            return r
        })
        .then( r => this.toggleCloseFormModal())
     
    }
    
    toggleDeleteConfirm(tradeId){
        if(tradeId){
            this.setState({currentTradeId: tradeId})
        }
        this.setState({showDeleteConfirm: !this.state.showDeleteConfirm});
    }

    deleteTrade(){
        console.log("--- delete trade --- ")
        this.props.deleteTrade(this.state.currentTradeId)
        .then(r => {
            actions.fetchTrackedTrades().then(data =>  {
                console.log('fetch', data)
                this.setState({trades : data }) 
            })
        })
        this.toggleDeleteConfirm();
        

    }

    handleAddNew(){
        this.setState({isEditing: false});
        this.toggleTrackingFormModal();
    }

    handleSubmit(trade){
        console.log('--- handle submit ----', trade);
        if(this.state.isEditing){
            this.props.editTrade(this.state.currentTradeId, trade)
            .then(r => {
                actions.fetchTrackedTrades().then(data =>  {
                    console.log('fetch', data)
                    this.setState({trades : data }) 
                })
            });
        }else{
            this.props.inserTrade(trade)
            .then(r => {
                actions.fetchTrackedTrades().then(data =>  {
                    console.log('fetch', data)
                    this.setState({trades : data }) 
                })
            });
        }
        this.toggleTrackingFormModal();

        console.log("open trades", this.props)
    }

    render() {
        let {showTrackingFormModal, showCloseFormModal} = this.state
        console.log('-- state ---', this.state)
       
        return (
            <Segment basic >
                <TrackingMenu  handleAddNew={this.handleAddNew}></TrackingMenu>
                <TrackerCardGroup 
                             trades={this.props.trades} 
                             toggleDeleteConfirm = {this.toggleDeleteConfirm}
                             startClose = {this.startClose}
                             startEdit = {this.startEdit}
                    />
            <FormModal show= {showTrackingFormModal} close = {this.toggleTrackingFormModal} title = "Track New Setup">
                <TrackerForm handleSubmit={this.handleSubmit}></TrackerForm>
            </FormModal> 
            <FormModal show= {showCloseFormModal} close = {this.toggleCloseFormModal} title = "Close">
                <CloseForm handleSubmit={this.handleSubmit}></CloseForm>
            </FormModal> 
            <Confirm
                open={this.state.showDeleteConfirm}
                onCancel={this.toggleDeleteConfirm}
                onConfirm={this.deleteTrade}
             />
            </Segment> 
            
        );
    }
}

const mapStateToProps = (state) => (
    {  
      trackingForm: state.trackingForm,
      trackedTrades: TradeSelectors.selectTrackedTrades(state),
      openTrades : TradeSelectors.selectOpenTrades(state),
      trades : state.trades.trades
    } 
  )
  
  const mapDispatchToProps = (dispatch) => (
      {
          setTrackingForm : (trackingForm) => {
              return dispatch({ type: 'SET_FORM_VALUE', payLoad:trackingForm });
          },

          deleteTrade : (tradeId) => {
              return actions.deleteTrackedTrade(tradeId);
          },

          inserTrade : (trade) => {
            return actions.insertTrackedTrade(trade);
          },

          editTrade : (tradeId, trade ) => {
              return actions.updateTrackedTrade(tradeId, trade);
          },

          getAllTrades: () => {
            console.log("fetch all trades ")  
            return   dispatch(actions.fetchTrackedTrades());
          }
      }
  )
  
  export default connect(mapStateToProps, mapDispatchToProps)(Tracking)




//   <Card>
//   <Image src='http://www.profitabletrading.com/sites/default/files/candlestick-chart.png' />
//   <Card.Content>
//           <Card.Header>EURUSD</Card.Header>
//           <Card.Meta>Goodman 66</Card.Meta>
//           <Card.Description> Sell Tp: 1.2310, Sl: 1.2320</Card.Description>
//       </Card.Content>
//       <Card.Content extra>
//           <Label color='green' ribbon>Open</Label>
//       </Card.Content>
// </Card>
// <Card>
// <Image src='http://www.profitabletrading.com/sites/default/files/candlestick-chart.png' />
// <Card.Content>
//   <Card.Header>EURUSD</Card.Header>
//   <Card.Meta>Goodman 66 LO</Card.Meta>
//   <Card.Description>BUY PNL: 150.22  </Card.Description>
// </Card.Content>
// <Card.Content extra>
//   <Label color='teal' ribbon>WIN</Label>
// </Card.Content>
// </Card>
// <Card>
// <Image src='http://www.profitabletrading.com/sites/default/files/candlestick-chart.png' />
// <Card.Content>
//   <Card.Header>EURUSD</Card.Header>
//   <Card.Meta>Goodman GDLK LC</Card.Meta>
//   <Card.Description> SELL PNL: -150.22</Card.Description>
// </Card.Content>
// <Card.Content extra>
//   <Label color='orange' ribbon>LOSS</Label>
// </Card.Content>
// </Card>