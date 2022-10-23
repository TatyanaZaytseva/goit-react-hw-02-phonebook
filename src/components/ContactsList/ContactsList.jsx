import React from 'react';
// import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';
import css from 'components/ContactsList/ContactsList.module.css';

export const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <section className={css.contacts}>
      <h2 className={css.title}>Contacts</h2>
      <ul сlassName={css.list}>
        {contacts.map(contact => {
          return (
            <ContactItem
              key={contact.id}
              id={contact.id}
              name={contact.name}
              //   number={contact.number}
              //   onDeleteContact={onDeleteContact}
            />
          );
        })}
      </ul>
    </section>
  );
};

// Contacts.propTypes = {
//   contacts: PropTypes.func.isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };
