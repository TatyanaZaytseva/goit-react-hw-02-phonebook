import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from 'components/Form/Form.module.css';

export class Form extends Component {
  nameInputId = nanoid();

  state = {
    name: '',
  };

  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    return (
      <section className={css.section_form}>
        <h2 className={css.title}>Phonebook</h2>
        <form
          autoComplete="off"
          name="Phonebook"
          className={css.form}
          onSubmit={this.handleSubmit}
        >
          <label htmlFor={this.nameInputId} className={css.name}>
            Name <br />
            <input
              type="text"
              name="name"
              id={this.nameInputId}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              className={css.input}
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </label>
          <button type="submit" className={css.button}>
            Add contact
          </button>
        </form>
      </section>
    );
  }
}
