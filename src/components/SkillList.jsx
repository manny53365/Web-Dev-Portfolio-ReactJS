import { List, ListItem, ListItemAvatar, ListItemText, Avatar, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAuthContext } from '../hooks/useAuthContext';
import styles from './SkillList.module.css';

export default function SkillList({ skills }) {
    
    const { user } = useAuthContext();

  return (
    <List id={styles['skill-list']}>
      {skills.map((skill, index) => (
        <ListItem key={index} secondaryAction={ user &&
          <IconButton edge='end' aria-label='delete'>
            <DeleteIcon />
          </IconButton>
        }>
          <ListItemAvatar>
            <Avatar src='favicon.ico' alt='skill logo' />
          </ListItemAvatar>
          <ListItemText className={styles['skill']} primary={skill.name}/>
        </ListItem>
      ))}
      </List>
  )
}
