import UserMenu from 'components/UserMenu/UserMenu';
import {
  CONTACTS_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
} from 'constants/routes';

import PrivateRoute from 'components/PrivateRoute/PrivateRoute';

import NotFound from 'pages/NotFound/NotFound';
import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, Routes } from 'react-router-dom';
import { reLoginThunk } from 'redux/auth/authOperations';
import { selectToken, selectIsLoggedIn } from 'redux/auth/authSelectors';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));

const appRoutes = [
  {
    path: HOME_ROUTE,
    element: HomePage,
  },
  {
    path: REGISTER_ROUTE,
    element: RegisterPage,
  },
  {
    path: LOGIN_ROUTE,
    element: LoginPage,
  },
  {
    path: CONTACTS_ROUTE,
    element: ContactsPage,
  },
];

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (!token || isLoggedIn) return;
    dispatch(reLoginThunk());
  }, [dispatch, token, isLoggedIn]);

  return (
    <div>
      <header>
        <h1>Phonebook</h1>
        <nav>
          <NavLink to={HOME_ROUTE}>Home</NavLink>
          {!isLoggedIn ? (
            <>
              <NavLink to={REGISTER_ROUTE}>Register</NavLink>
              <NavLink to={LOGIN_ROUTE}>Login</NavLink>
            </>
          ) : (
            <>
              <NavLink to={CONTACTS_ROUTE}>Contacts</NavLink>
              {isLoggedIn && <UserMenu />}
            </>
          )}
        </nav>
      </header>
      <Suspense>
        <Routes>
          {appRoutes.map((route, index) => {
            if (route.path === CONTACTS_ROUTE) {
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <PrivateRoute>
                      <route.element />
                    </PrivateRoute>
                  }
                />
              );
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={<route.element />}
              />
            );
          })}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <footer>
        <p>© 2023 Phonebook App by Mykyta Bilyi</p>
      </footer>
    </div>
  );
};
