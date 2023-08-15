import React from 'react';
import css from './ContactItem.module.css';

const ContactItem = ({ contactData }) => {
  return (
    <li className={css.contactItem}>
      <h4 className="contactName">Name: {contactData.name}</h4>
      <p className="contactPhone">Phone: {contactData.number}</p>
      <button className="deleteButton">Delete</button>
    </li>
  );
};

export default ContactItem;
