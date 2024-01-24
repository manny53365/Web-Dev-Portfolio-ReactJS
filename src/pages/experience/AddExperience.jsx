import { useState } from 'react';
import { Box, TextField, Button} from '@mui/material';
import { useFirestore } from '../../hooks/useFirestore';
import { useNavigate } from 'react-router-dom';

import styles from './AddExperience.module.css';

export default function AddExperience() {

  const [role, setRole] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [duration, setDuration] = useState('');
  const [duties, setDuties] = useState('');
  const { addDocument, response } = useFirestore('experience');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await addDocument({
      role,
      companyName,
      duration,
      duties
    });
    navigate('/experience');
  };

  return (
    <Box onSubmit={handleSubmit} className={styles['add-experience-form']} component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' },}} noValidate autoComplete="off">
        <h2>Add work experience - Admin Panel</h2>
        <TextField label="Role title" variant="outlined" type='text' required={true} value={role} 
        onChange={event => setRole(event.target.value)}
        />
        <TextField label="Company name" variant="outlined" type='text' required={true} value={companyName} 
        onChange={event => setCompanyName(event.target.value)}
        />
        <TextField label="Duration" variant="outlined" type='text' required={true} value={duration} 
        onChange={event => setDuration(event.target.value)}
        />
        <TextField label="Duties/Responsibilities" multiline type='text' required={true} value={duties} rows={4}
        onChange={event => setDuties(event.target.value)}
        />
        {response.isPending && <Button variant="outlined" type='submit' disabled >Adding Experience...</Button>}
        {!response.isPending && <Button variant="outlined" type='submit'>Add Experience</Button>}
    </Box>
  )
};
