import React, { Component } from 'react';
import { Segment, Statistic} from 'semantic-ui-react';

class HistoryStats extends Component {
    render() {
        return (
            <Segment basic textAlign='center'>
                 <Statistic size='huge'>
                    <Statistic.Value> {this.props.totalPNL}</Statistic.Value>
                    <Statistic.Label>Total Pnl </Statistic.Label>
                  </Statistic>
                  <Statistic size='huge'>
                    <Statistic.Value> {this.props.totalCount}</Statistic.Value>
                    <Statistic.Label> Total Count </Statistic.Label>
                  </Statistic >
                  <Statistic size='huge'>
                    <Statistic.Value> {this.props.lossingTradesCount}</Statistic.Value>
                    <Statistic.Label> Loss Count </Statistic.Label>
                  </Statistic>
                  <Statistic size='huge'>
                    <Statistic.Value> {this.props.winningTradesCount}</Statistic.Value>
                    <Statistic.Label>Win Count </Statistic.Label>
                  </Statistic>
                  <Statistic size='huge'>
                    <Statistic.Value> {this.props.averageLossPnl}</Statistic.Value>
                    <Statistic.Label> Average Loss </Statistic.Label>
                  </Statistic>
                  <Statistic size='huge'>
                    <Statistic.Value> {this.props.averageWinPnl}</Statistic.Value>
                    <Statistic.Label> Average Win </Statistic.Label>
                  </Statistic>
            </Segment>
        );
    }
}

export default HistoryStats;