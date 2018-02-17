import React, { Component } from 'react';
import { Segment, Card, Image, Button, Statistic, Table} from 'semantic-ui-react';
import HistoryMenu from './HistoryMenu'

import ReactTable from "react-table";
import "react-table/react-table.css";

import * as actions from '../actions/TrackerActions'


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
        actions.fetchTrackedTrades().then(data =>  {
            console.log('fetch', data)
            this.setState({trades : data }) 
        })
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
        accessor: 'timeOfDay', // String-based value accessors!
      
      } ,
      {
        Header: 'PNL',
        accessor: 'pnl', // String-based value accessors!  
      },  
     
    ]

   return (
            <Segment basic >
                <HistoryMenu></HistoryMenu>
                <Segment  basic>
                 <CardExampleGroups></CardExampleGroups>
                </Segment>
                <Segment basic>
                  <ReactTable
                    data={this.state.trades}
                    columns={columns}
                    filterable
                    style={{
                      height: "900px" // This will force the table body to overflow and scroll, since there is not enough room
                    }}
                    className="-striped -highlight"
                    onFilteredChange={(filters) => {
                      let newTrades = this.state.trades.filter(trade =>{
                         let pass = true;
                         filters.forEach( f => {
                           let tradeVal = String(trade[f.id])
                           console.log('val', tradeVal)
                           if(!tradeVal.startsWith(f.value)){
                            pass = false
                           }
                         })
                         return pass;
                      })
                    //  console.log(filters)
                      this.setState({filteredTrades:newTrades})
                    }} 
                    minRows={0}
                    filterAll={true}
              
                   
                />
                </Segment>
            </Segment>
        );
    }
}




export default History;