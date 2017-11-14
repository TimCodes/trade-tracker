import React, { Component } from 'react';
import {Statistic, Segment} from 'semantic-ui-react'
import Clock from 'react-live-clock';

class ClockWall extends Component {
    render() {
        return (
          <div>
               <Statistic size="mini" inverted>
                    <Statistic.Value  ><Clock format={'ddd HH:MM:ss'} ticking={true} timezone={'US/Eastern'} /></Statistic.Value>
                    <Statistic.Label  >New York</Statistic.Label>
                </Statistic>
                <Statistic size="mini" inverted>
                    <Statistic.Value><Clock format={'ddd HH:MM:ss'}  ticking={true} timezone={'Europe/London'} /></Statistic.Value>
                    <Statistic.Label>London</Statistic.Label>
                </Statistic>
                <Statistic size="mini" inverted>
                    <Statistic.Value><Clock format={'ddd HH:MM:ss'}  ticking={true} timezone={'Australia/Sydney'} /></Statistic.Value>
                    <Statistic.Label>Sydney</Statistic.Label>
                </Statistic>
        </div>
      );
    }
}

export default ClockWall;