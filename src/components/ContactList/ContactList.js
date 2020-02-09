import React, { Component } from "react";

export default class ContactList extends Component {
  render() {
    const { contacts, onRemoveContact } = this.props;
    return (
      <div>
        {contacts.map(({ id, name, number }) => (
          <ul>
            <li key={id}>
              {name}: {number}
              <button onClick={() => onRemoveContact(id)}>
                Delete Contact
              </button>
            </li>
          </ul>
        ))}
      </div>
    );
  }
}
