import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

class Login extends React.Component {
    constructor({props}: { props: any }) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }
    render() {
        return (
            <Container maxWidth="xs" className="custom-container">
                <Typography variant="h4" gutterBottom>
                    Вход в систему
                </Typography>
                <form noValidate autoComplete="off">
                    <TextField
                        id="username"
                        name="username"
                        label="Имя пользователя"
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        id="password"
                        name="password"
                        label="Пароль"
                        type="password"
                        fullWidth
                        margin="normal"
                    />
                    <Button variant="contained" fullWidth>
                        Войти
                    </Button>
                </form>
            </Container>
        );
    }
}

export default Login;
