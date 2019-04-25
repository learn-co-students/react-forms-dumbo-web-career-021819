// Code ControlledInput Component Here
import React from 'react';

class Form extends React.Component {

  // Setting State

  state = {
    firstName: "John",
    lastName: "Henry"
  }

  // Functions

  handleFirstNameChange = event => {
  this.setState({
    firstName: event.target.value
  })
}

  handleLastNameChange = event => {
  this.setState({
    lastName: event.target.value
  })
}

// Uncontrolled function ---------

// handleSubmit = event => {
//   event.preventDefault()
//   const firstName = event.target.children[0].value
//   const lastName = event.target.children[1].value
//   // this.sendFormDataSomewhere({ firstName, lastName })
//   alert(firstName, lastName, "Submitted")
// }
//---------------------------------

// Controlled Function -----------

handleSubmit = event => {
event.preventDefault()
// this.sendFormDataSomewhere(this.state)
alert(this.state.firstName + " " + this.state.lastName)
}
//---------------------------------

// Rendering

  render() {
    return (
      <form onSubmit={ event => this.handleSubmit(event) }>
        <input type="text" name="firstName" value={this.state.firstName} onChange={event => this.handleFirstNameChange(event)}/>
        <input type="text" name="lastName" value={this.state.lastName} onChange={event => this.handleLastNameChange(event)}/>
        <input type="submit" value="submit" onClick={event => this.handleSubmit(event)} />
      </form>
    )
  }
}

export default Form;
