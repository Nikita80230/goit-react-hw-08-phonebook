import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './ContactsPage.module.css';

import { ContactsList } from 'components/ContactsList/ContactsList';
import NewContactForm from 'components/NewContactForm/NewContactForm';

import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { getContactsThunk } from 'redux/contacts/contactsOperations';
import { selectIsLoading } from 'redux/contacts/contactsSelector';
import { Loader } from 'components/Loader/Loader';

const ContactsPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoggedIn) return;

    dispatch(getContactsThunk());
  }, [dispatch, isLoggedIn]);

  return (
    <div className={css.contactSection}>
      <NewContactForm />
      {isLoading && <Loader />}
      <h2>Contact List</h2>
      <ContactsList />
    </div>
  );
};

export default ContactsPage;
