import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Filter from './components/Filter';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import './App.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };
  submitFromForm = data => {
    const { name, number } = data;

    this.setState(prevState =>
      prevState.contacts.push({ id: uuidv4(), name: name, number: number }),
    );
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
  deleteContact = e => {
    console.log(e);
    // this.setState(prevState =>
    //   prevState.contacts.reduce((newContact, contact) => {
    //     if (contact.id !== e.target.parentElement.__reactFiber$x6e9an9lqe.key) {
    //       newContact.push(contact);
    //     }
    //     return newContact;
    //   }, []),
    // );
  };
  render() {
    const onVisibleContacts = this.getVisibleContacts();
    const { filter } = this.state;
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.submitFromForm} />
        <h2> Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          visibleContacts={onVisibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
