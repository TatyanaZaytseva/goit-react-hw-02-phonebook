import React from 'react';
// import PropTypes from 'prop-types';
import css from 'components/ContactItem/ContactItem.module.css';

export const ContactItem = ({ id, name }) => {
  return (
    <li className={css.item}>
      {name}
      {/* <button
        className={css.button}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button> */}
    </li>
  );
};

// ContactItem.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   //   number: PropTypes.string.isRequired,
//   //   onDeleteContact: PropTypes.func.isRequired,
// };
