import React from 'react'
import { Button, Checkbox, Form, Label, Segment, Dropdown, Header } from 'semantic-ui-react'

let os = [
  {
     text: 'Yes',
     value: 1
  },
   {
     text: 'No',
     value: 0
  }
]

const DropdownExampleSelection = () => (
  <Dropdown placeholder='Short Consuldation?' fluid selection options={os} />
)

const YesNoDropDown = (props) => (
   <Form.Field inline>
     <label> {props.label} </label>  
     <Dropdown placeholder={props.placeholder} fluid selection options={os} />
  </Form.Field>   
)


const QualifierForm = () => (
  <Segment >
   <Form >
    <Header as='h1' textAlign = 'center'>S/D Trade qualifier </Header>
    <h3> General </h3>
    <Form.Group widths='equal'>
        <YesNoDropDown 
            placeholder = "was there a trendline break" 
            label = "Trend Line Break"
        />
        <YesNoDropDown 
            placeholder = "Is there an intersection with a fib level?" 
            label = "Fib level"
        />
    </Form.Group>
  
    <Form.Group widths='equal'>
        <YesNoDropDown 
            placeholder = "Is there an intersection with a Goodman level?" 
            label = "Goodman level"
        />
        <YesNoDropDown 
            placeholder = "Is there an intersection with any Institutional levels?" 
            label = "Institutional Orders level"
        />
    </Form.Group>
    <Form.Group widths='equal'>
        <YesNoDropDown 
            placeholder = "Is price nested with  in a higher time frame S/D levels?" 
            label = "Nested S/D"
        />
        <YesNoDropDown 
            placeholder = "Has price tested this level before?" 
            label = "Available Liquidity"
        />
    </Form.Group>
    <h3> Supply and Demand Taxonomy</h3>
    <Form.Group widths='equal'>
        <YesNoDropDown 
            placeholder = "Is Accumation composed of full-bodied candles?" 
            label = "Accumulation Structure"
        />
        <YesNoDropDown 
            placeholder = "Was S/D in parity for a short duration?" 
            label = "Accumulation Duration"
    />
    </Form.Group>
    <Form.Group widths='equal'>
        <YesNoDropDown 
            placeholder = "Did Price move from the area of accumulation Strongly?"
            label = "Impulsive Move Strength" 
        />
        <YesNoDropDown 
            placeholder = "Did Price Move atleast 3 times larger than accumulation?"
            label = "Impulsive Move Length" 
        />
    </Form.Group>
    <Form.Group widths='equal'>
        <YesNoDropDown 
            placeholder = "Is This a Parent S/D Level ?"
            label = "S/D Hiarchy" 
        />
        <YesNoDropDown 
            placeholder = "Was the Price Move able to consume opposing S/D levels?"
            label = "S/D Prowess" 
        />
    </Form.Group>
    <Button type='submit'>Submit</Button>
  </Form>
</Segment>  
)

export default QualifierForm