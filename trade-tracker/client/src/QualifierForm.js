import React from 'react'
import { Button, Checkbox, Form, Label, Segment, Dropdown, Header, Message } from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form'


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


// always caopilize componetes
const EasyDropDown = (props) =>  { 
   return  <Form.Field inline>
     <label> {props.label} </label>  
     <Dropdown placeholder={props.placeholder} fluid selection options={props.options} />
  </Form.Field>    
}

const YesNoDropDown = (props) => (
   <Form.Field inline>
     <label> {props.label} </label>  
     <Dropdown placeholder={props.placeholder} fluid selection options={os} />
  </Form.Field>   
)

const renderDropDown =  ({ input, label, placeholder,  data, meta: { touched, error, warning } }) => { 
  console.log("--- input ---", input )
  return (
  <Form.Field inline>
    <label>{label}</label>
    <div>
       <Dropdown 
        placeholder={placeholder}  
        onChange={ (e, data) => input.onChange(data.value)}
        onBlur = {(e,d) => input.onBlur(data.value)}
        onFocus = {input.onFocus}  
        defaultValue={input.value}
        fluid
        selection 
        options={data}
      />
      {touched && ((error && <Message negative>{error}</Message>) || (warning && <span>{warning}</span>))}
    </div>
  </Form.Field>
)};

let accumulationDuration = [
  {
     text: '1 to 2',
     value: 2
  },
   {
     text: '2 to 5',
     value: 1
  },
  {
     text: 'greater than 5',
     value: 0
  }
];

let priceVelocity = [
  {
     text: 'price went >= 3x sd zone',
     value: 2
  },
   {
     text: 'price went  2x sd zone',
     value: 1
  },
  {
     text: 'price went 1x sd zone',
     value: 0
  }

];


let priceVisitation = [
    {
        text: 'price has not been back',
        value: 2
     },
      {
        text: 'price has been back once',
        value: 1
     },
     {
        text: 'price has been back more than once',
        value: 0
     }
]

let QualifierForm = (props ) => {
 const { handleSubmit } = props; 
 return (
    <Segment >
    <Form onSubmit={ handleSubmit } >
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
            <Field
                name = 'Velocity'
                placeholder = "How far did price move went it left zone " 
                component={renderDropDown} 
                label = "Price Velocity"
                data = {priceVelocity}
            />
            <Field
                name = 'accumulationDuration'
                placeholder = "Was S/D in parity for a short duration?" 
                component={renderDropDown} 
                label = "Accumulation Duration"
                data = {accumulationDuration}
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
}
QualifierForm= reduxForm({
  // a unique name for the form
  form: 'Qualifier'
})(QualifierForm)

class Qualifier extends React.Component {
  submit = (values) => {
    // print the form values to the console
    console.log(values)
  }
  render() {
    return (
      <QualifierForm onSubmit={this.submit} />
    )
  }
}

export default Qualifier