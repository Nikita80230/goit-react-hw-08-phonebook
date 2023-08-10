import UserMenu from "components/UserMenu/UserMenu";
import { ContactsPage } from "pages/ContactsPage/ContactsPage";
import HomePage from "pages/HomePage/HomePage";
import LoginPage from "pages/LoginPage/LoginPage";
import NotFound from "pages/NotFound/NotFound";
import RegisterPage from "pages/RegisterPage/RegisterPage";
import { Link, Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <header>
        <h1>Phonebook</h1>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
            <li className="logout">
              <UserMenu />
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <footer>
        <p>© 2023 Phonebook App</p>
      </footer>
    </div>
  );
};
