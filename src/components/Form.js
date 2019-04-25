import React, { Component } from "react";

class Form extends Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  };

  handleFirstName = e => {
    this.setState({
      firstName: e.target.value
    })
  }


  handleLastName = e => {
    this.setState({
      lastName: e.target.value
    })
  }


  handleSubmit = event => {
    event.preventDefault()
    const firstName = event.target.children[0].value
    const lastName = event.target.children[1].value
    this.sendFormDataSomewhere({firstName, lastName})
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <input type="text" name="firstName" onChange={e => this.handleFirstName(e)} defaultValue={this.state.firstName} />
        <input type="text" name="lastName" value={this.state.lastName} onChange={e => this.handleLastName(e)} />
      </form>
    );
  }
}

export default Form;
