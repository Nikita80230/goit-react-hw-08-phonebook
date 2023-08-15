import React from 'react';
import css from './NewContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContactThunk } from 'redux/contacts/contactsOperations';

const NewContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const formElement = e.currentTarget.elements;
    const formData = {
      name: formElement.name.value,
      number: formElement.number.value,
    };
    console.log(formData);
    dispatch(addContactThunk(formData));
    e.currentTarget.reset();
  };
  return (
    <div className={css.contactForm}>
      <h3>Add Contact</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="number">Number:</label>
        <input type="tel" id="number" name="number" required />
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};

export default NewContactForm;
