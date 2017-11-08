
import { Icon, Table } from 'semantic-ui-react'

import React, { Component } from 'react';
import ReactDataGrid from 'react-data-grid'

const { Toolbar, Filters: { NumericFilter, AutoCompleteFilter, MultiSelectFilter, SingleSelectFilter }, Data: { Selectors } } = require('react-data-grid-addons');


class TradesTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            rows : [],
            columns: [
              {
                key: 'id',
                name: 'ID',
                width: 120,
                filterable: true,
                filterRenderer: NumericFilter
              },
              {
                key: 'task',
                name: 'Title',
                filterable: true
              },
              {
                key: 'priority',
                name: 'Priority',
                filterable: true,
                filterRenderer: MultiSelectFilter
              },
              {
                key: 'issueType',
                name: 'Issue Type',
                filterable: true,
                filterRenderer: SingleSelectFilter
              },
              {
                key: 'developer',
                name: 'Developer',
                filterable: true,
                filterRenderer: AutoCompleteFilter
              },
              {
                key: 'complete',
                name: '% Complete',
                filterable: true,
                filterRenderer: NumericFilter
              },
              {
                key: 'startDate',
                name: 'Start Date',
                filterable: true
              },
              {
                key: 'completeDate',
                name: 'Expected Complete',
                filterable: true
              }
            ],
            filters : {}
        }

        this.createRows(1000)

        this.rowGetter = this.rowGetter.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
      //  this.onClearFilters     = this.onClearFilters.bind(this)
        this.getValidFilterValues  = this.getValidFilterValues.bind(this)
        this.handleOnClearFilters = this.handleOnClearFilters.bind(this)
        this.handleOnFilter = this.handleOnFilter.bind(this)

        setTimeout(() => {
          console.log('reset shit ')
          this.createRows(5)
        }, 7000)
    }
    
    getRandomDate(start, end) {
      return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
    }

    componentWillMount(){
      this.createRows(100)
    }
  
    createRows(numberOfRows) {
      console.log('--- get rows ---', numberOfRows) 
      let rows = [];
      for (let i = 1; i < numberOfRows; i++) {
        rows.push({
          id: i,
          task: 'Task ' + i,
          complete: Math.min(100, Math.round(Math.random() * 110)),
          priority: ['Critical', 'High', 'Medium', 'Low'][Math.floor((Math.random() * 3) + 1)],
          issueType: ['Bug', 'Improvement', 'Epic', 'Story'][Math.floor((Math.random() * 3) + 1)],
          developer: ['James', 'Tim', 'Daniel', 'Alan'][Math.floor((Math.random() * 3) + 1)],
          startDate: this.getRandomDate(new Date(2015, 3, 1), new Date()),
          completeDate: this.getRandomDate(new Date(), new Date(2016, 0, 1))
        });
        
      }
      this.setState({ rows })
      return rows;
    }
  
    rowGetter(index) {
      console.log('get row ')
      return Selectors.getRows(this.state)[index];
    }

    rowsCount() {
      return Selectors.getRows(this.state).length;
    }
    
    handleFilterChange(filter) {
     // console.log('filter change')
      //console.log(Selectors.getRows(this.state))
      let newFilters = Object.assign({}, this.state.filters);
      if (filter.filterTerm) {
        newFilters[filter.column.key] = filter;
      } else {
        delete newFilters[filter.column.key];
      }
      this.setState({ filters: newFilters });
    }
  
    getValidFilterValues(columnId) {
      let values = this.state.rows.map(r => r[columnId]);
      return values.filter((item, i, a) => { return i === a.indexOf(item); });
    }
  
    handleOnClearFilters() {
      this.setState({ filters: {} });
    }
    
    handleOnFilter(e){
      // console.log('handle on filter')
      // console.log(arguments)
      // console.log(e)
    }
    componentDidUpdate(props, state){
      console.log('will update', state)
      console.log(arguments)
      console.log("--- will update rows --", Selectors.getRows(this.state))
    }
    render() {
     // console.log(this.state)
     // console.log('--- selectros ---', Selectors)
     console.log(Selectors.getRows(this.state), '--- get rows ---- ')

      return  (
        <ReactDataGrid
          enableCellSelect={true}
          columns={this.state.columns}
          rowGetter={this.rowGetter}
          rowsCount={this.rowsCount()}
          minHeight={500}
          toolbar={<Toolbar enableFilter={true}/>}
          onAddFilter={this.handleFilterChange}
          onFilter={this.handleOnFilter}
          onRows = {this.handleOnFilter}
          getValidFilterValues={this.getValidFilterValues}
          onClearFilters={this.handleOnClearFilters} />);
    }
}

export default TradesTable;


function getData(){
   return  [{
        "id": 1,
        "first_name": "Welch",
        "last_name": "Farden"
      }, {
        "id": 2,
        "first_name": "Norbie",
        "last_name": "Steddall"
      }, {
        "id": 3,
        "first_name": "Dex",
        "last_name": "Colliss"
      }, {
        "id": 4,
        "first_name": "Andy",
        "last_name": "Juliff"
      }, {
        "id": 5,
        "first_name": "Carlee",
        "last_name": "Alessandone"
      }, {
        "id": 6,
        "first_name": "Giacopo",
        "last_name": "Humburton"
      }, {
        "id": 7,
        "first_name": "Dora",
        "last_name": "Sinkinson"
      }, {
        "id": 8,
        "first_name": "Kessia",
        "last_name": "Woodwing"
      }, {
        "id": 9,
        "first_name": "Renault",
        "last_name": "Brendel"
      }, {
        "id": 10,
        "first_name": "Jaymie",
        "last_name": "Reame"
      }, {
        "id": 11,
        "first_name": "Lesley",
        "last_name": "Howie"
      }, {
        "id": 12,
        "first_name": "Dani",
        "last_name": "Celier"
      }, {
        "id": 13,
        "first_name": "Dasi",
        "last_name": "Picheford"
      }, {
        "id": 14,
        "first_name": "Cacilie",
        "last_name": "Kording"
      }, {
        "id": 15,
        "first_name": "Norton",
        "last_name": "Antonioni"
      }, {
        "id": 16,
        "first_name": "Katya",
        "last_name": "Sabattier"
      }, {
        "id": 17,
        "first_name": "Giordano",
        "last_name": "Marchiso"
      }, {
        "id": 18,
        "first_name": "Brynna",
        "last_name": "Raisbeck"
      }, {
        "id": 19,
        "first_name": "Harp",
        "last_name": "Mathonnet"
      }, {
        "id": 20,
        "first_name": "Kerianne",
        "last_name": "Heffer"
      }, {
        "id": 21,
        "first_name": "Marrissa",
        "last_name": "Le Fleming"
      }, {
        "id": 22,
        "first_name": "Demetre",
        "last_name": "Doret"
      }, {
        "id": 23,
        "first_name": "Elliott",
        "last_name": "Mecchi"
      }, {
        "id": 24,
        "first_name": "Tammi",
        "last_name": "Fronzek"
      }, {
        "id": 25,
        "first_name": "Josh",
        "last_name": "Embury"
      }, {
        "id": 26,
        "first_name": "Jasmina",
        "last_name": "Compson"
      }, {
        "id": 27,
        "first_name": "Rozalin",
        "last_name": "Youtead"
      }, {
        "id": 28,
        "first_name": "Doralynne",
        "last_name": "Levet"
      }, {
        "id": 29,
        "first_name": "Barry",
        "last_name": "Yanshonok"
      }, {
        "id": 30,
        "first_name": "Rodi",
        "last_name": "Sulman"
      }, {
        "id": 31,
        "first_name": "Meir",
        "last_name": "Winfred"
      }, {
        "id": 32,
        "first_name": "Susanna",
        "last_name": "Turmall"
      }, {
        "id": 33,
        "first_name": "Marcela",
        "last_name": "Govey"
      }, {
        "id": 34,
        "first_name": "Oates",
        "last_name": "Diggons"
      }, {
        "id": 35,
        "first_name": "Glenden",
        "last_name": "Richel"
      }, {
        "id": 36,
        "first_name": "Fidelia",
        "last_name": "Crowther"
      }, {
        "id": 37,
        "first_name": "Kalila",
        "last_name": "Siggs"
      }, {
        "id": 38,
        "first_name": "Arni",
        "last_name": "Carson"
      }, {
        "id": 39,
        "first_name": "Nilson",
        "last_name": "Kubatsch"
      }, {
        "id": 40,
        "first_name": "Mozes",
        "last_name": "Goodchild"
      }, {
        "id": 41,
        "first_name": "Vale",
        "last_name": "McLellan"
      }, {
        "id": 42,
        "first_name": "Harwell",
        "last_name": "Reidie"
      }, {
        "id": 43,
        "first_name": "Zed",
        "last_name": "Grote"
      }, {
        "id": 44,
        "first_name": "Mommy",
        "last_name": "Girardin"
      }, {
        "id": 45,
        "first_name": "Lillis",
        "last_name": "Farryn"
      }, {
        "id": 46,
        "first_name": "Farra",
        "last_name": "Oliffe"
      }, {
        "id": 47,
        "first_name": "Valeria",
        "last_name": "Draper"
      }, {
        "id": 48,
        "first_name": "Emelda",
        "last_name": "Brade"
      }, {
        "id": 49,
        "first_name": "Cara",
        "last_name": "Linner"
      }, {
        "id": 50,
        "first_name": "Jule",
        "last_name": "McRoberts"
      }]
}