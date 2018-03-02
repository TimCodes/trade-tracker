import React, { Component } from 'react';
import {Card, Image, Label, Button} from 'semantic-ui-react';
import TrackerCard from './TrackerCard'


class TrackerCardGroup extends Component {
    render() {
        let cards = this.props.trades.map(trade => {
         
            let  label = "";
            {  
                switch(trade.status){
                  case "Open": {
                    label =   <Label color='green' ribbon>Open</Label>;
                    break;
                  }
                  case "Tracking": {
                    label =   <Label color='violet' ribbon>Tracking</Label>;
                    break;
                  }
                  default:
                  label =   <Label color='violet' ribbon>Tracking</Label>;
                  break;

                  
              }
          }
          return (
                <TrackerCard
                    trade={trade}
                    toggleDeleteConfirm = {this.props.toggleDeleteConfirm}
                    startEdit = {() => this.props.startEdit(trade)}
                    label = {label}
                />
            )
       });
        return (
            <Card.Group itemsPerRow={3} stackable>
              {cards}
            </Card.Group>
        );
    }
}

export default TrackerCardGroup;