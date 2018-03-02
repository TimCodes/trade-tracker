import React, { Component } from 'react';
import {Card, Image, Label, Button} from 'semantic-ui-react';

class TrackerCard extends Component {
    render() {
        let trade = this.props.trade
        return (
            <Card raised key={trade['_id']}>
            <Image src={ trade.chartUri || 'http://www.profitabletrading.com/sites/default/files/candlestick-chart.png' } />
            <Card.Content>
                <Card.Header>{trade.symbol}</Card.Header>
                <Card.Meta>{ trade.strategy + " " + trade.setup  + " " + trade.timeOfDay +  " " + trade.timeFrame}</Card.Meta>
                <Card.Description>{trade.notes}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              {
                 this.props.label
              }
                <Button floated="right"  color='orange' onClick={() => this.props.toggleDeleteConfirm(trade['_id'])} >Delete</Button>  
                <Button floated="right"  onClick={() => this.props.startEdit(trade['_id']) } color='teal'>Edit</Button>            
            </Card.Content>
        </Card>
        );
    }
}

export default TrackerCard;