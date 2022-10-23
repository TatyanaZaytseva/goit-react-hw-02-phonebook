import { Component } from 'react';
import { Form } from '../Form/Form';
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
    console.log(data);
    this.setState({
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
  render() {
    return (
      <div className={css.container}>
        <Form onSubmit={this.formSubmitHandler} />
        <Filter contacts={this.state.filter} onFilter={this.handleFilter} />
        <ContactsList contacts={this.filterContacts} />
      </div>
    );
  }
}
