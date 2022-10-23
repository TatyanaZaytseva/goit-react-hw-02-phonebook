import { Component } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactsList } from '../ContactsList/ContactsList';
import { Filter } from '../Filter/Filter';
import css from 'components/App/App.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    const { name } = data;
    const nameToLowerCase = name.toLowerCase();
    const nameDuplication = this.state.contacts.find(
      contact => contact.name.toLowerCase() === nameToLowerCase
    );
    nameDuplication
      ? alert(`${data.name} is already in contacts`)
      : this.setState({
          contacts: [data, ...this.state.contacts],
        });
  };

  handleFilter = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  filterContacts = () => {
    const contactToLowerCase = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(contactToLowerCase)
    );
  };

  onDeleteContact = contactID => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactID),
    }));
  };

  render() {
    return (
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2 className={css.title}>Contacts</h2>
        <Filter contacts={this.state.filter} onFilter={this.handleFilter} />
        <ContactsList
          contacts={this.filterContacts}
          onDeleteContact={this.onDeleteContact}
        />
      </div>
    );
  }
}
