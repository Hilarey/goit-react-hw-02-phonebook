import React, { Component } from "react";

export default class ContactForm extends Component {
  state = {
    name: "",
    number: ""
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      name: "",
      number: ""
    });
  };

  render() {
    const { name, number } = this.state;
    const { getAddContact } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <br />
            <input
              type="text"
              value={name}
              onChange={this.handleChange}
              name="name"
              placeholder="Введите имя контакта"
            />
          </label>
          <br />
          <br />
          <label>
            Number
            <br />
            <input
              type="text"
              value={number}
              onChange={this.handleChange}
              name="number"
              placeholder="Введите номер контакта"
            />
          </label>
          <br />
          <br />
          <button type="submit" onClick={getAddContact}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}
