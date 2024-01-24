import { useState } from 'react';
import { Box, TextField, Button, Input, InputLabel } from '@mui/material';
import { useFirestore } from '../../hooks/useFirestore';
import { useNavigate } from 'react-router-dom';

import styles from './AddProject.module.css';

export default function AddProject() {

  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [siteLink, setSiteLink] = useState('');
  const [repoLink, setRepoLink] = useState('');
  const [projectThumbnail, setProjectThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState('');
  const { addDocument, response } = useFirestore('projects');
  const navigate = useNavigate();

  const handleFileChange = event => {
    setProjectThumbnail(null);
    let selectedImg = event.target.files[0];

    if (!selectedImg){
        setThumbnailError('Please select a file');
        return;
    };
    if (!selectedImg.type.includes('image')){
        setThumbnailError('Selected file must be an image');
        return;
    };
    if (selectedImg.size > 5000000){
        setThumbnailError('Image file size must be less than 5MB');
        return;
    };

    setThumbnailError(null);
    setProjectThumbnail(selectedImg);
};

  const handleSubmit = async (event) => {
    event.preventDefault();
    await addDocument({
      projectName,
      description,
      siteLink,
      repoLink,
      projectThumbnail
    });
    navigate('/projects');
};

  return (
    <Box onSubmit={handleSubmit} className={styles['add-project-form']} component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' },}} noValidate autoComplete="off">
        <h2>Add Project - Admin Panel</h2>
        <TextField label="Project Name" variant="outlined" type='text' required={true} value={projectName} 
        onChange={event => setProjectName(event.target.value)}
        />
        <TextField label="Description" multiline type='text' required={true} value={description} rows={4}
        onChange={event => setDescription(event.target.value)}
        />
        <TextField label="Live website link" variant="outlined" type='text' value={siteLink}
        onChange={event => setSiteLink(event.target.value)}
        />
        <TextField label="Github repo link" variant="outlined" type='text' value={repoLink}
        onChange={event => setRepoLink(event.target.value)}
        />
        <InputLabel>Upload your project thumbnail:</InputLabel>
        <Input type='file' required={true} onChange={handleFileChange} />
        {thumbnailError && <div className='error'>{thumbnailError}</div>}
        {response.isPending && <Button variant="outlined" type='submit' disabled >Adding Project...</Button>}
        {!response.isPending && <Button variant="outlined" type='submit'>Add Project</Button>}
    </Box>
  )
};
