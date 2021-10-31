import React, { Component } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name } = this.state;

    this.setState(prevState =>
      prevState.contacts.push({ id: uuidv4(), name: name }),
    );

    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    return (
      <div className="App">
        <section>
          Phonebook
          <form onSubmit={this.handleSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
              />
            </label>
            <button type="submit">Add contact</button>
          </form>
        </section>
        <section>
          Contacts
          <ul>
            {this.state.contacts.map(contact => (
              <li key={contact.id}>{contact.name}</li>
            ))}
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
