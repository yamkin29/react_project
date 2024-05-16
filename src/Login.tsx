import React from 'react';

function Login() {
    return (
        <div className="login-page">
            <h2 className="login-title">Вход в систему</h2>
            <form className="login-form">
                <div className="form-group">
                    <label htmlFor="username">Имя пользователя:</label>
                    <input type="text" id="username" name="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Пароль:</label>
                    <input type="password" id="password" name="password" />
                </div>
                <button type="submit">Войти</button>
            </form>
        </div>
    );
}

export default Login;
