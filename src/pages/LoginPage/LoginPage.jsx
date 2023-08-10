import React from 'react'
import css from "./LoginPage.module.css"

const LoginPage = () => {
    return (
        <div className={css.loginContainer}>
            <h1>Login</h1>
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required="" />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required="" />
                <button type="submit">Log In</button>
            </form>
        </div>

    )
}

export default LoginPage;
