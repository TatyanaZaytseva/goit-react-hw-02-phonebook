import { Component } from 'react';
import { Form } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import css from 'components/App.module.css';

export class App extends Component {
  state = {
    contacts: [],
  };
  formSubmitHandler = data => {
    console.log(data);
    this.setState({
      contacts: [data, ...this.state.contacts],
    });
  };

  render() {
    return (
      <div className={css.container}>
        <Form onSubmit={this.formSubmitHandler} />
        <ContactsList contacts={this.state.contacts} />
      </div>
    );
  }
}
