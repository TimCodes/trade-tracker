import React, { Component } from 'react';
import Clock from 'react-live-clock';

class ClockWall extends Component {
    render() {
        return (
            <div>
                New York : <Clock format={'mmmm dS, h:MM:ss TT'} ticking={true} timezone={'US/Eastern'} />
                London : <Clock format={'mmmm dS, h:MM:ss TT'} ticking={true} timezone={'Europe/London'} />
                Sydney : <Clock format={'mmmm dS, h:MM:ss TT'} ticking={true} timezone={'Australia/Sydney'} />
                
                
            </div>
        );
    }
}

export default ClockWall;