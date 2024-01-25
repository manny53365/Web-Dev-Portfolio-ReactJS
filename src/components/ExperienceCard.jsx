import {Card, CardContent, Typography } from '@mui/material';

import styles from './ExperienceCard.module.css';

export default function ExperienceCard({ props }) {
  return (
    <Card className={styles.experience}>
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
            {`${props.role} at ${props.companyName}`}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
            {props.duration}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
            {props.duties}
        </Typography>
      </CardContent>
    </Card>
  )
};
