import { 
  styled, Box, List, ListItem, ListItemAvatar, ListItemIcon,  ListItemText, Avatar, IconButton, FormGroup,
  FormControlLabel, Checkbox, Grid, Typography
} from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAuthContext } from '../../hooks/useAuthContext';

import styles from './About.module.css';

export default function About() {

  const { user } = useAuthContext();

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Avatar with text and icon
          </Typography>
            <List>
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Single-line item"
                    // secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>
            </List>
        </Grid>
    </Box>
  )
};

// function generate(element) {
//   return [0, 1, 2].map((value) =>
//     React.cloneElement(element, {
//       key: value,
//     }),
//   );
// }

// const Demo = styled('div')(({ theme }) => ({
//   backgroundColor: theme.palette.background.paper,
// }));

// export default function InteractiveList() {
//   const [dense, setDense] = React.useState(false);
//   const [secondary, setSecondary] = React.useState(false);

//   return (
//     <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
//       <FormGroup row>
//         <FormControlLabel
//           control={
//             <Checkbox
//               checked={dense}
//               onChange={(event) => setDense(event.target.checked)}
//             />
//           }
//           label="Enable dense"
//         />
//         <FormControlLabel
//           control={
//             <Checkbox
//               checked={secondary}
//               onChange={(event) => setSecondary(event.target.checked)}
//             />
//           }
//           label="Enable secondary text"
//         />
//       </FormGroup>
//       <Grid container spacing={2}>
//         <Grid item xs={12} md={6}>
//           <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
//             Text only
//           </Typography>
//           <Demo>
//             <List dense={dense}>
//               {generate(
//                 <ListItem>
//                   <ListItemText
//                     primary="Single-line item"
//                     secondary={secondary ? 'Secondary text' : null}
//                   />
//                 </ListItem>,
//               )}
//             </List>
//           </Demo>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
//             Icon with text
//           </Typography>
//           <Demo>
//             <List dense={dense}>
//               {generate(
//                 <ListItem>
//                   <ListItemIcon>
//                     <FolderIcon />
//                   </ListItemIcon>
//                   <ListItemText
//                     primary="Single-line item"
//                     secondary={secondary ? 'Secondary text' : null}
//                   />
//                 </ListItem>,
//               )}
//             </List>
//           </Demo>
//         </Grid>
//       </Grid>
//       <Grid container spacing={2}>
//         <Grid item xs={12} md={6}>
//           <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
//             Avatar with text
//           </Typography>
//           <Demo>
//             <List dense={dense}>
//               {generate(
//                 <ListItem>
//                   <ListItemAvatar>
//                     <Avatar>
//                       <FolderIcon />
//                     </Avatar>
//                   </ListItemAvatar>
//                   <ListItemText
//                     primary="Single-line item"
//                     secondary={secondary ? 'Secondary text' : null}
//                   />
//                 </ListItem>,
//               )}
//             </List>
//           </Demo>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
//             Avatar with text and icon
//           </Typography>
//           <Demo>
//             <List dense={dense}>
//               {generate(
//                 <ListItem
//                   secondaryAction={
//                     <IconButton edge="end" aria-label="delete">
//                       <DeleteIcon />
//                     </IconButton>
//                   }
//                 >
//                   <ListItemAvatar>
//                     <Avatar>
//                       <FolderIcon />
//                     </Avatar>
//                   </ListItemAvatar>
//                   <ListItemText
//                     primary="Single-line item"
//                     secondary={secondary ? 'Secondary text' : null}
//                   />
//                 </ListItem>,
//               )}
//             </List>
//           </Demo>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }