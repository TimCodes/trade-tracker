import React, { Component } from 'react';
import { Segment, Card, Image, Button, Statistic, Table} from 'semantic-ui-react';
import { connect } from 'react-redux';
import ReactTable from "react-table";
import "react-table/react-table.css";

import HistoryMenu from './HistoryMenu'
import HistoryStats from './HistoryStats'
import HistoryTable from './HistoryTable'


import * as actions from '../../actions/TrackerActions'
import * as TradeSelectors from '../../selectors/TradeSelector'


// TODO : use redux for fitler from react data table 

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
           
               <HistoryStats 
                 totalPNL={this.props.totalPNL}
                 totalCount={this.props.trades.length}
                 lossingTradesCount={this.props.lossingTradesCount}
                 winningTradesCount={this.props.winningTradesCount}
                 averageLossPnl={this.props.averageLossPnl}
                 averageWinPnl={this.props.averageWinPnl}
               />
               <HistoryTable 
                  trades={this.props.trades}
                  columns={columns}
                  setHistoricalTradesFilters = {this.props.setHistoricalTradesFilters}
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


