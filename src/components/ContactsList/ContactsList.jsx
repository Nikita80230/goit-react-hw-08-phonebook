import ContactItem from 'components/ContactItem/ContactItem';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactsSelector';
import css from './ContactsList.module.css';

export const ContactsList = () => {
  const contacts = useSelector(selectContacts);

  return (
    <ul className={css.contactList}>
      {contacts ? (
        contacts.map(contact => {
          return <ContactItem key={contact.id} contactData={contact} />;
        })
      ) : (
        <h3>There is no contacts in your phonebook</h3>
      )}
    </ul>
  );
};
