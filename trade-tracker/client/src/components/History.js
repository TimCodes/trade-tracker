import React, { Component } from 'react';
import { Segment, Card, Image, Button, Statistic, Table} from 'semantic-ui-react';
import HistoryMenu from './HistoryMenu'
import { connect } from 'react-redux';

import ReactTable from "react-table";
import "react-table/react-table.css";

import * as actions from '../actions/TrackerActions'
import * as TradeSelectors from '../selectors/TradeSelector'


// TODO : use redux for fitler from react data table 


const StatisticExampleHorizontalGroup = () => (
    <Statistic.Group horizontal widths={12} size={'huge'}>
      <Statistic>
        <Statistic.Value>2,204</Statistic.Value>
        <Statistic.Label>Views</Statistic.Label>
      </Statistic>
      <Statistic>
        <Statistic.Value>3,322</Statistic.Value>
        <Statistic.Label>Downloads</Statistic.Label>
      </Statistic>
      <Statistic>
        <Statistic.Value>22</Statistic.Value>
        <Statistic.Label>Tasks</Statistic.Label>
      </Statistic>
    </Statistic.Group>
  )
const CardExampleGroups = () => (
    <Card.Group itemsPerRow={2}>
      <Card>
        <Card.Content>
          <Image src='http://www.profitabletrading.com/sites/default/files/candlestick-chart.png' fluid />
        </Card.Content>
      </Card>
      <Card>
         <StatisticExampleHorizontalGroup></StatisticExampleHorizontalGroup>
      </Card>
    </Card.Group>
  )



class History extends Component {

  constructor(props){
    super(props)

    this.state = {
      trades : [],
      filteredTrades : []
    }

    this.setFilteredTrades = this.setFilteredTrades.bind(this)
  }

  componentWillMount(){
      this.props.setFilter("closed");
      console.log("histpry trades", this.props.trades)
      this.setState({trades : this.props.trades})
  }

  componentWillUpdate(nextProps, nextState){
    console.log('chagnes')
    console.log(nextState)
    console.log(nextProps)
  }

  setFilteredTrades(filteredTrades) {
    console.log('set',filteredTrades, this.state)
    //this.setState({filteredTrades})
    //actions.getFiltered()
  }


  render() {
    const columns = [
      {
        Header: 'Symbol', // Custom header components!
        accessor: 'symbol',
    },
     {
        Header: 'Strategy',
        accessor: 'strategy',
       
      },
      {
        Header: 'Time Of Day',
        accessor: 'timeofday', // String-based value accessors!
      
      } ,
      {
        Header: 'PNL',
        accessor: 'pnl', // String-based value accessors!  
      },  
      {
        Header: 'Result',
        accessor: 'result', // String-based value accessors!
      
      } 
     
    ]

   return (
            <Segment basic > 
               
                <Segment  basic>
                 <CardExampleGroups></CardExampleGroups>
                  total pnl  :  {this.props.totalPNL}
                  total count  :  {this.props.trades.length}                  
                  loss count :  {this.props.lossingTradesCount}
                  win  count :  {this.props.winningTradesCount}
                  average loss : {this.props.averageLossPnl}
                  average win : {this.props.averageWinPnl}
                  
                </Segment>
                <Segment basic>
                  <ReactTable
                    data={this.props.trades}
                    columns={columns}
                    filterable
                    style={{
                      height: "900px" // This will force the table body to overflow and scroll, since there is not enough room
                    }}
                    className="-striped -highlight"
                    onFilteredChange={(filters) => {
                      this.props.setHistoricalTradesFilters(filters);
                    }} 
                    minRows={0}
                    filterAll={true}
                    pages={20}
                   
                />
                </Segment>
            </Segment>
        );
    }
}



const mapStateToProps = (state) => (
  {  
    trackingForm: state.trackingForm,
    trackedTrades: TradeSelectors.selectTrackedTrades(state),
    openTrades : TradeSelectors.selectOpenTrades(state),
    trades : TradeSelectors.historicalTradesSlector(state),
    totalPNL : TradeSelectors.historicalTotalPNL(state),
    winningTradesCount : TradeSelectors.historicalWinningTradesCount(state),
    lossingTradesCount : TradeSelectors.historicalLossingTradesCount(state),
    winningTrades: TradeSelectors.historicalWinningTrades(state),
    averageWinPnl : TradeSelectors.historicalWinningTradesAvgPnl(state),
    averageLossPnl : TradeSelectors.historicalLossingTradesAvgPnl(state)
    
  } 
)

const mapDispatchToProps = (dispatch) => (
    {
        setTrackingForm : (trackingForm) => {
            return dispatch({ type: 'SET_FORM_VALUES', payLoad:trackingForm });
        },
        
        setHistoricalTradesFilters: (filters) => {
            return dispatch({ type: "SET_HISTORICAL_FILTERS", payLoad: filters})
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
        },

        setFilter: (filter) => {
          return dispatch(actions.setTradesFilter(filter))
        }
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(History)


