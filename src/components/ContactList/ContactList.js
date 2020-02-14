import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from './ContactList.module.css';

export default class ContactList extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
      })
    ).isRequired,
    onRemoveContact: PropTypes.func.isRequired
  };
  render() {
    const { contacts, onRemoveContact } = this.props;
    return (
      <div>
        <ul className={styles.list}>
          {contacts.map(({ id, name, number }) => (
            <li className={styles.item} key={id}>
              {name}: {number}
              <button className={styles.button} onClick={() => onRemoveContact(id)}>
                Delete Contact
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
