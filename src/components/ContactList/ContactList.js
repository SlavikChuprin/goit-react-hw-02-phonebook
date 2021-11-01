import React from 'react';
import s from './ContactList.module.css';

const ContactList = ({ visibleContacts, onDeleteContact }) => (
  <ul className={s.contactList}>
    {visibleContacts.map(contact => (
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
    ))}
  </ul>
);

export default ContactList;
