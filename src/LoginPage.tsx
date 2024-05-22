import React, {useState} from 'react';
import {Button, Container, TextField, Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import './LoginPage.css';

interface FormData {
    username: string;
    password: string;
}

interface AuthResponse {
    token: string;
    refreshToken: string;
}

const LoginPage: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({ username: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const requestData = {
            login: formData.username,
            password: formData.password,
            type: 0
        };

        console.log('Отправляемый запрос:', JSON.stringify(requestData));

        fetch('http://services.kd.local:8002/api/v1/auth/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Ответ сервера:', data);
                const token = data.token;
                const refreshToken = data.refreshToken;
                if (token && refreshToken) {
                    localStorage.setItem('token', token);
                    localStorage.setItem('refreshToken', refreshToken);
                    fetchProtectedData()
                    navigate('/MainPage');
                } else {
                    console.error('Ошибка входа: Отсутствует токен или рефреш-токен в ответе сервера');
                }
            })
            .catch(error => {
                if (error.response) {
                    console.error('Ошибка при отправке запроса:', error.message);
                }
            });
    }

    const refreshToken = (): Promise<string> => {
        const refreshToken = localStorage.getItem('refreshToken');
        if (!refreshToken) {
            console.error('Ошибка обновления токена: отсутствует рефреш-токен');
            return Promise.reject('No refresh token available');
        }

        return fetch('http://services.kd.local:8002/api/v1/auth/refresh', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ refreshToken })
        })
            .then(response => response.json())
            .then((data: AuthResponse) => {
                const {token: newToken, refreshToken: newRefreshToken} = data;
                if (newToken && newRefreshToken) {
                    localStorage.setItem('token', newToken);
                    localStorage.setItem('refreshToken', newRefreshToken);
                    return newToken;
                } else {
                    console.error('Ошибка обновления токена: отсутствует новый токен или рефреш-токен в ответе сервера');
                    return Promise.reject('Failed to refresh token');
                }
            })
            .catch(error => {
                console.error('Ошибка при обновлении токена:', error.message);
                return Promise.reject(error);
            });
    }

    const fetchWithAuth = (url: string, options: RequestInit = {}): Promise<Response> => {
        let token = localStorage.getItem('token');

        if (!token) {
            return Promise.reject('No access token available');
        }

        const headers = {
            ...options.headers,
            'Authorization': `Bearer ${token}`
        };

        return fetch(url, { ...options, headers })
            .then(response => {
                if (response.status === 401) {
                    return refreshToken().then(newToken => {
                        return fetch(url, {
                            ...options,
                            headers: {
                                ...options.headers,
                                'Authorization': `Bearer ${newToken}`
                            }
                        });
                    });
                } else {
                    return response;
                }
            });
    }

    const fetchProtectedData = () => {
        fetchWithAuth('http://services.kd.local:8002/api/v1/protected/data')
            .then(response => response.json())
            .then(data => {
                console.log('Ответ сервера:', data);
            })
            .catch(error => {
                console.error('Ошибка при запросе защищенных данных:', error.message);
            });
    }

    return (
        <Container maxWidth="xs" className="custom-container">
            <Typography variant="h4" gutterBottom>
                Авторизация
            </Typography>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                    className="custom-input"
                    id="username"
                    name="username"
                    label="Имя пользователя"
                    fullWidth
                    margin="normal"
                    value={formData.username}
                    onChange={handleChange}
                />
                <TextField
                    className="custom-input"
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
            </form>
        </Container>
    );
}

export default LoginPage;
