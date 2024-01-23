import { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import styles from './Login.module.css';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('I was clicked');
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
        <Button variant="outlined" type='submit'>Outlined</Button>
    </Box>
  )
};

