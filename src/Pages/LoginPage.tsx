import React, {useState} from 'react';
import {Button, Container, TextField, Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import '../Styles/LoginPage.css';

interface FormData {
    username: string;
    password: string;
}

const LoginPage: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({ username: "", password: "" });
    const navigate = useNavigate();
    const [error, setError] = useState<string>("");
    const [usernameError, setUsernameError] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string>("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));

        if (name === "username") {
            setUsernameError("");
        } else if (name === "password") {
            setPasswordError("");
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const requestData = {
            login: formData.username,
            password: formData.password,
            type: 0
        };

        if (!formData.username && !formData.password) {
            setError("Пожалуйста, заполните все поля");
            setUsernameError("Пожалуйста, заполните все поля");
            setPasswordError("Пожалуйста, заполните все поля");
            return;
        }

        if (!formData.username) {
            setUsernameError("Пожалуйста, заполните все поля");
            setError("Пожалуйста, заполните все поля");
            return;
        }

        if (!formData.password) {
            setPasswordError("Пожалуйста, заполните все поля");
            setError("Пожалуйста, заполните все поля");
            return;
        }

        console.log('Отправляемый запрос:', JSON.stringify(requestData));

        fetchWithAuth('http://services.kd.local:8002/api/v1/auth/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Неправильный логин или пароль');
                }
                return response.json();

            })
            .then(data => {
                console.log('Ответ сервера:', data);
                const token = data.token;
                const refreshToken = data.refreshToken;
                if (token && refreshToken) {
                    localStorage.setItem('token', token);
                    localStorage.setItem('refreshToken', refreshToken);
                    navigate('/MainPage');
                } else {
                    setError('Ошибка входа: Отсутствует токен или рефреш-токен в ответе сервера');
                }
            })
            .catch(error => {
                if (error.response && error.response.status) {
                    setError('Ошибка ' + error.response.status + ' при отправке запроса: ' + error.message);
                } else if (error.status) {
                    setError('Ошибка ' + error.status + ' при отправке запроса: ' + error.message);
                } else {
                    setError('Ошибка при отправке запроса: ' + error.message);
                }
            });
    }

    const refreshToken = async (): Promise<string> => {
        const refreshToken = localStorage.getItem('refreshToken');
        if (!refreshToken) {
            console.error('Ошибка обновления токена: отсутствует рефреш-токен');
            return Promise.reject('No refresh token available');
        }

        try {
            let response = await fetch('http://services.kd.local:8002/api/v1/auth/refresh', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({refreshToken})
            });
            let data: any = await response.json();
            const {token: newToken, refreshToken: newRefreshToken} = data;
            if (newToken && newRefreshToken) {
                localStorage.setItem('token', newToken);
                localStorage.setItem('refreshToken', newRefreshToken);
                return newToken;
            } else {
                console.error('Ошибка обновления токена: отсутствует новый токен или рефреш-токен в ответе сервера');
                return Promise.reject('Failed to refresh token');
            }
        } catch (error: any) {
            console.error('Ошибка при обновлении токена:', error.message);
            return Promise.reject(error);
        }
    }

    const fetchWithAuth = async (url: string, options: RequestInit = {}): Promise<Response> => {
        let token = localStorage.getItem('token');

        if (!token) {
            return Promise.reject('No access token available');
        }

        const headers = {
            ...options.headers,
            'Authorization': `Bearer ${token}`
        };

        let response = await fetch(url, {...options, headers});
        if (response.status === 401) {
            let newToken = await refreshToken();
            return fetch(url, {
                ...options,
                headers: {
                    ...options.headers,
                    'Authorization': `Bearer ${newToken}`
                }
            });

        } else {
            return response;
        }
    }

    return (
        <Container maxWidth="xs" className="custom-container">
            <div className="custom-icon">
                <img src="/Images/app.ico" alt="Description"></img>
            </div>
            <Typography variant="h4" gutterBottom>
                Вход в систему
            </Typography>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                    className={"custom-input" + (usernameError ? " error" : "")}
                    id="username"
                    name="username"
                    label="Имя пользователя"
                    fullWidth
                    margin="normal"
                    value={formData.username}
                    onChange={handleChange}
                />
                <TextField
                    className={"custom-input" + (passwordError ? " error" : "")}
                    id="password"
                    name="password"
                    label="Пароль"
                    type="password"
                    fullWidth
                    margin="normal"
                    value={formData.password}
                    onChange={handleChange}
                />
                <Button type="submit" variant="contained" fullWidth className="custom-button">
                    Войти
                </Button>
                {error && <Typography variant="body2" color="error" className="error-message">{error}</Typography>}
            </form>
        </Container>
    );
}

export default LoginPage;
