import React from 'react';
import s from './ContactListItem.module.css';

const ContactListItem = ({ contacts, visibleContacts, onDeleteContact }) => {
  return visibleContacts.map(contact => (
    <li key={contact.id} className={s.contactItem}>
      {contact.name}: {contact.number}
      <button
        type="button"
        className={s.btnDel}
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  ));
};

export default ContactListItem;
