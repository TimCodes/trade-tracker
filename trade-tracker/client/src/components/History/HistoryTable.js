import React, { Component } from 'react';
import { Segment} from 'semantic-ui-react';
import ReactTable from "react-table";
import "react-table/react-table.css";

class HistoryTable extends Component {
    render() {
        return (
            <Segment basic>
            <ReactTable
              data={this.props.trades}
              columns={this.props.columns}
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
        );
    }
}

export default HistoryTable;