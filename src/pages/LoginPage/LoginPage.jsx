import React from 'react';
import css from './LoginPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { loginThunk } from 'redux/auth/authOperations';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { Navigate } from 'react-router-dom';
// import ContactsPage from 'pages/ContactsPage/ContactsPage';

const LoginPage = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget.elements;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    const formData = {
      email,
      password,
    };
    dispatch(loginThunk(formData));
    e.currentTarget.reset();
  };

  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }

  return (
    <div className={css.loginContainer}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LoginPage;
