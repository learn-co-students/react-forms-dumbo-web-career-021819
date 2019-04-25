// Code ControlledInput Component Here
import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "",
    lastName: ""
  }


handleNameChange = event => {
  this.setState({
    [event.target.name]: event.target.value
  })
}

handleSubmit = event => {
  event.preventDefault()
  console.log(this.state)
}

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        First Name<input type="text" name="firstName" onChange={event => this.handleNameChange(event)} value={this.state.firstName} />
       <br/> <br/>Last Name<input type="text" name="lastName" onChange={event => this.handleNameChange(event)} value={this.state.lastName} />
      <br/><button>Submit</button></form>
    )
  }
}

export default Form;