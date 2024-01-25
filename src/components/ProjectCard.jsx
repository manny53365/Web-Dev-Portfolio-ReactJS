import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';

import styles from './ProjectCard.module.css';

export default function ProjectCard({ props }) {
  return (
    <Card className={styles.project} elevation={10}>
      <CardMedia component="img" alt='Project Thumbnail' height="140" image={props.projectThumbnail} />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
            {props.projectName}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
            {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        {props.siteLink !== '' && <Button size='small' href={props.siteLink} rel='noopener noreferrer'>Link to {props.name} site</Button>}
        {props.repoLink !== '' && <Button size='small' href={props.repoLink} rel='noopener noreferrer'>Link to {props.name} github repo</Button>}
      </CardActions>
    </Card>
  )
};
