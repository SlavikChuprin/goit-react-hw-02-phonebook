import React, { Component } from 'react';
import './App.css';
import Filter from './components/Filter';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import ContactListItem from './components/ContactListItem/ContactListItem';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  submitFromForm = data => {
    const { name } = data;
    const nameAlreadyIs = this.state.contacts.find(
      contact => contact.name === name,
    );

    if (nameAlreadyIs) {
      alert(`${name} is already in contacts`);
      return;
    }

    this.setState(prevState => ({
      contacts: { ...prevState.contacts, ...data },
    }));
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

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  render() {
    const onVisibleContacts = this.getVisibleContacts();
    const { filter, contacts } = this.state;
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.submitFromForm} />
        <h2> Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList>
          <ContactListItem
            contacts={contacts}
            visibleContacts={onVisibleContacts}
            onDeleteContact={this.deleteContact}
          />
        </ContactList>
      </div>
    );
  }
}

export default App;
