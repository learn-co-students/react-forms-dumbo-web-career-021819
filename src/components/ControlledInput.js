import React, {Component} from "react";

export default class ControlledInput extends Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  }

  changeName = (event) => {
    console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <form onSubmit={event=>this.handleSubmit(event)}>
        <label>First Name</label>
        <input onChange={event=>this.changeName(event)} type="text" name="firstName" value={this.state.firstName} /><br/>
        <label>Last Name</label>
        <input onChange={event=>this.changeName(event)} type="text" name="lastName" value={this.state.lastName} /><br/>
        <input type="submit"/>
      </form>
    )
  }
}
