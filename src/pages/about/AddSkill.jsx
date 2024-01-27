import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Input, InputLabel} from '@mui/material';
import { useFirestore } from '../../hooks/useFirestore';

import styles from './AddSkill.module.css';

export default function AddSkill() {

    const [skillName, setSkillName] = useState('');
    const [skillIcon, setSkillIcon] = useState(null);
    const [iconError, setIconError] = useState('');
    const navigate = useNavigate();
    const { addDocument, response } = useFirestore('skills');

    const handleFileChange = event => {
        setSkillIcon(null);
        let selectedImg = event.target.files[0];
    
        if (!selectedImg){
            setIconError('Please select a file');
            return;
        };
        if (!selectedImg.type.includes('image')){
            setIconError('Selected file must be an image');
            return;
        };
        if (selectedImg.size > 5000000){
            setIconError('Image file size must be less than 5MB');
            return;
        };
    
        setIconError(null);
        setSkillIcon(selectedImg);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await addDocument({
          skillName,
          skillIcon
        });
        navigate('/about');
    };


  return (
    <Box onSubmit={handleSubmit} className={styles['add-skill-form']} component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' },}} noValidate autoComplete="off">
        <h2>Add Skill - Admin Panel</h2>
        <TextField label="Skill" variant="outlined" type='text' required={true} value={skillName} 
        onChange={event => setSkillName(event.target.value)}
        />
        <InputLabel>Upload the skill's logo:</InputLabel>
        <Input type='file' required={true} onChange={handleFileChange} />
        {iconError && <p>{iconError}</p>}
        {response.isPending && <Button variant="outlined" type='submit' disabled >Adding Skill...</Button>}
        {!response.isPending && <Button variant="outlined" type='submit'>Add Skill</Button>}
    </Box>
  )
}
