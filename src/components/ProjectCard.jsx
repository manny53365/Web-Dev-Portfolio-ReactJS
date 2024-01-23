import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';

import styles from './ProjectCard.module.css';

export default function ProjectCard({ props }) {
  return (
    <Card className={styles.project}>
      <CardMedia component="img" alt='Project Thumbnail' height="140" image={props.img} />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
            {props.name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
            {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small' href={props.link} rel='noopener noreferrer'>Link to {props.name} site</Button>
      </CardActions>
    </Card>
  )
};
