import React, { Component } from "react";
import shortid from "shortid";
import Layout from "./Layout/Layout";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

export default class App extends Component {
  state = {
    contacts: [],
    filter: ""
  };

  handleAddContact = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact]
    }));
  };

  handleRemoveContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId)
    }));
  };

  handleFilterChange = filter => {
    this.setState({ filter });
  };

  // getVisibleTasks = () => {
  //   const { contacts, filter } = this.state;

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

  render() {
    const { filter, contacts } = this.state;
    // const visibleTasks = this.getVisibleTasks;
    return (
      <Layout>
        <h1>Phonebook</h1>
        <ContactForm getAddContact={this.handleAddContact} />
        <h2>Contacts</h2>
        <ContactList
          contacts={contacts}
          onRemoveContact={this.handleRemoveContact}
        />
        <Filter value={filter} onFilterChange={this.handleFilterChange} />
      </Layout>
    );
  }
}
