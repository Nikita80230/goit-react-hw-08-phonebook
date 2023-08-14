import UserMenu from 'components/UserMenu/UserMenu';
import {
  CONTACTS_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
} from 'constants/routes';
import { ContactsPage } from 'pages/ContactsPage/ContactsPage';
import HomePage from 'pages/HomePage/HomePage';
import LoginPage from 'pages/LoginPage/LoginPage';
import NotFound from 'pages/NotFound/NotFound';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, Routes } from 'react-router-dom';
import { reLoginThunk } from 'redux/auth/authOperations';
import {
  selectToken,
  selectIsLoggedIn,
  // selectUserData,
} from 'redux/auth/authSelectors';

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
    dispatch(reLoginThunk(token));
  }, [dispatch, token]);

  return (
    <div>
      <header>
        <h1>Phonebook</h1>

        <nav>
          <ul>
            <li>
              <Link to={HOME_ROUTE}>Home</Link>
            </li>
            <li>{!isLoggedIn && <Link to={REGISTER_ROUTE}>Register</Link>}</li>
            <li>{!isLoggedIn && <Link to={LOGIN_ROUTE}>Login</Link>}</li>
            <li>
              <Link to={CONTACTS_ROUTE}>Contacts</Link>
            </li>

            {isLoggedIn && (
              <li className="logout">
                <button>
                  <UserMenu />
                </button>
              </li>
            )}
            {/* <li className="logout">
              <button>
                <UserMenu userData={userData} />
              </button>
            </li> */}
          </ul>
        </nav>
      </header>
      <Routes>
        {appRoutes.map(route => {
          return <Route path={route.path} element={<route.element />} />;
        })}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <footer>
        <p>© 2023 Phonebook App</p>
      </footer>
    </div>
  );
};

// {
//   isLoggedIn && (
//     <li className="logout">
//       <button>
//         <UserMenu userData={userData} />
//       </button>
//     </li>
//   );
// }
