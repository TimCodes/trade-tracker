import React, { Component } from 'react';
import {Card, Image, Label, Segment} from 'semantic-ui-react';

let arr = [
    'hello',
    'rar',
    'plus',
    'asdgdsg',
    'adgdsg'
  ]
class Tracking extends Component {

    render() {
        let cards = arr.map(a => {
            return (
                <Card raised>
                    <Image src='http://www.profitabletrading.com/sites/default/files/candlestick-chart.png' />
                    <Card.Content>
                        <Card.Header>EURUSD</Card.Header>
                        <Card.Meta>Goodman 66</Card.Meta>
                        <Card.Description>QQ reprop at 1.5431</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Label color='violet' ribbon>Tracking</Label>
                    </Card.Content>
                </Card>
            )
       });
        return (
            
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
        );
    }
}

export default Tracking;