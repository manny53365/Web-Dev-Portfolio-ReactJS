import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button } from '@mui/material';
import { useLogin } from '../../hooks/useLogin';

import styles from './Login.module.css';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const {login, isPending, error} = useLogin();

    const handleSubmit = async (event) => {
        event.preventDefault();
        await login(email, password);
        navigate('/');
    };

  return (
    <Box onSubmit={handleSubmit} className={styles['login-form']} component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' },}} noValidate autoComplete="off">
        <h2>Log in - Admin Panel</h2>
        <TextField label="Email" variant="outlined" type='email' required value={email} 
        onChange={event => setEmail(event.target.value)}
        />
        <TextField label="Password" variant="outlined" type='password' required value={password}
        onChange={event => setPassword(event.target.value)}
        />
        {isPending && <Button variant="outlined" type='submit' disabled>Logging in...</Button>}
        {!isPending && <Button variant="outlined" type='submit'>Log in</Button>}
        {error && <p>{error}</p>}
    </Box>
  )
};

