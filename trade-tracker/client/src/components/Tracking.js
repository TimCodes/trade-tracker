import React, { Component } from 'react';
import {Card, Image, Label, Segment, Button, Header} from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../actions/TrackerActions'
import TrackerForm from './TrackingForm'
import FormModal from './FormModal'
import TrackingMenu from './TrackingMenu'
let arr = [
    'hello',
    'rar',
    'plus',
    'asdgdsg',
    'adgdsg'
  ]
class Tracking extends Component {

    constructor(props){
        super(props)
        console.log('--- get trades ---')
        this.state = { visible: false, showFormModal : false, trades: [] }
        this.toggleFormModal = this.toggleFormModal.bind(this)
        this.startEdit    = this.startEdit.bind(this)
    }

    componentWillMount(){
        actions.fetchTrackedTrades().then(data =>  {
            console.log('fetch', data)
            this.setState({trades : data }) 
        })
    }
    
    toggleFormModal(){
        this.setState({ showFormModal: !this.state.showFormModal})
    }

    startEdit(trackId){
        console.log('---start edit ----', trackId)
        actions.fetchTrackedTrade(trackId)
        .then(r => {
            this.props.setTrackingForm(r)
            return r
        })
        .then( r => this.toggleFormModal())
     
    }


    render() {
        let {showFormModal} = this.state
        console.log('-- state ---', this.state)
        let cards = this.state.trades.map(a => {
            return (
                <Card raised key={a['_id']}>
                    <Image src={ a.chartUri || 'http://www.profitabletrading.com/sites/default/files/candlestick-chart.png' } />
                    <Card.Content>
                        <Card.Header>{a.symbol}</Card.Header>
                        <Card.Meta>{ a.strategy + " " + a.setup  + " " + a.timeOfDay +  " " + a.timeFrame}</Card.Meta>
                        <Card.Description>{a.notes}</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Label color='violet' ribbon>Tracking</Label>
                        <Button floated="right"  color='orange'>Delete</Button>       
                        <Button floated="right"  onClick={() => this.startEdit(a['_id']) } color='teal'>Edit</Button>            
                    </Card.Content>
                </Card>
            )
       });
        return (
            <Segment basic >
                <TrackingMenu  toggleFormModal = {this.toggleFormModal}></TrackingMenu>
                <Card.Group itemsPerRow={3} stackable>
                    {cards} 
                    <Card>
                        <Image src='http://www.profitabletrading.com/sites/default/files/candlestick-chart.png' />
                        <Card.Content>
                                <Card.Header>EURUSD</Card.Header>
                                <Card.Meta>Goodman 66</Card.Meta>
                                <Card.Description> Sell Tp: 1.2310, Sl: 1.2320</Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <Label color='green' ribbon>Open</Label>
                            </Card.Content>
                    </Card>
                    <Card>
                    <Image src='http://www.profitabletrading.com/sites/default/files/candlestick-chart.png' />
                    <Card.Content>
                        <Card.Header>EURUSD</Card.Header>
                        <Card.Meta>Goodman 66 LO</Card.Meta>
                        <Card.Description>BUY PNL: 150.22  </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Label color='teal' ribbon>WIN</Label>
                    </Card.Content>
                    </Card>
                    <Card>
                    <Image src='http://www.profitabletrading.com/sites/default/files/candlestick-chart.png' />
                    <Card.Content>
                        <Card.Header>EURUSD</Card.Header>
                        <Card.Meta>Goodman GDLK LC</Card.Meta>
                        <Card.Description> SELL PNL: -150.22</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Label color='orange' ribbon>LOSS</Label>
                    </Card.Content>
                    </Card>
                </Card.Group>
            <FormModal show= {showFormModal} close = {this.toggleFormModal} title = "Track New Setup">
                <TrackerForm></TrackerForm>
            </FormModal> 
            </Segment> 
            
        );
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(Tracking)