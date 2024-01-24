import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button } from '@mui/material';
import { useSignup } from '../../hooks/useSignup';
import styles from './Signup.module.css';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const {signup, isPending, error} = useSignup();

    const handleSubmit = (event) => {
        event.preventDefault();
        signup(email, password);
        console.log('Signing up...');
        navigate('/');
    };

  return (
    <Box onSubmit={handleSubmit} className={styles['sign-up-form']} component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' },}} noValidate autoComplete="off">
        <h2>Create Account - Admin Panel</h2>
        <TextField label="Email" variant="outlined" type='email' required value={email} 
        onChange={event => setEmail(event.target.value)}
        />
        <TextField label="Password" variant="outlined" type='password' required value={password}
        onChange={event => setPassword(event.target.value)}
        />
        {isPending && <Button variant="outlined" type='submit' disabled>Signing up...</Button>}
        {!isPending && <Button variant="outlined" type='submit'>Sign up</Button>}
        {error && <p>{error}</p>}
    </Box>
  )
};

