import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerThunk } from 'redux/auth/authOperations';

import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import css from './RegisterPage.module.css';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget.elements;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const formData = {
      name,
      email,
      password,
    };
    dispatch(registerThunk(formData));
    e.currentTarget.reset();
  };

  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }

  return (
    <div className={css.registerContainer}>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          minLength={7}
        />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default RegisterPage;
