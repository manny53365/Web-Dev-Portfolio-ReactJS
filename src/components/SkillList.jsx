import { List, ListItem, ListItemAvatar, ListItemText, Avatar, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAuthContext } from '../hooks/useAuthContext';
import { useFirestore } from '../hooks/useFirestore';
import styles from './SkillList.module.css';

export default function SkillList({ skills }) {
    
    const { user } = useAuthContext();
    const { deleteDocument, response } = useFirestore('skills');

    const handleDelete = (skillID, skillLogo) => {
      console.log(`Deleteing skill with id: ${skillID} and logo ${skillLogo}`);
      deleteDocument(skillID, skillLogo);
    };

  return (
    <List id={styles['skill-list']}>
      {skills.map((skill) => (
        <ListItem key={skill.id} secondaryAction={ user &&
          <IconButton edge='end' aria-label='delete' onClick={() => handleDelete(skill.id, skill.skillIcon)}>
            <DeleteIcon />
          </IconButton>
        }>
          <ListItemAvatar>
            <Avatar src={skill.skillIcon} alt='skill logo' />
          </ListItemAvatar>
          <ListItemText className={styles['skill']} primary={skill.skillName}/>
        </ListItem>
      ))}
      {response.error && <p>{response.error}</p>}
      </List>
  )
}
