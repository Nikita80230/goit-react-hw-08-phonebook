import React from 'react';
import css from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/contacts/contactsOperations';

const ContactItem = ({ contactData }) => {
  const dispatch = useDispatch();

  const handelDelete = id => {
    dispatch(deleteContactThunk(id));
  };

  return (
    <li className={css.contactItem}>
      <h4 className="contactName">Name: {contactData.name}</h4>
      <p className="contactPhone">Phone: {contactData.number}</p>
      <button
        className="deleteButton"
        onClick={() => handelDelete(contactData.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
