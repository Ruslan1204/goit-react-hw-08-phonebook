import PropTypes from 'prop-types';
// import css from '../ContactList/ContactList.module.css';
import { Grid, IconButton, List, ListItem, Typography } from '@mui/material';

import { styled } from '@mui/material/styles';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

// import FolderIcon from '@mui/icons-material/Folder';
import PhoneIcon from '@mui/icons-material/Phone';
import DeleteIcon from '@mui/icons-material/Delete';
// import { useState } from 'react';

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export const ContactItem = ({ name, number, onDelete }) => {
  // const [dense, setDense] = useState(false);
  // const [secondary, setSecondary] = useState(false);

  return (
    <>
      <Grid item xs={12} md={6}>
        <Demo>
          <List>
            <ListItem
              secondaryAction={
                <IconButton>
                  <Typography>
                    <DeleteIcon
                      fontSize="large"
                      onClick={onDelete}
                    />
                  </Typography>
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <PhoneIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={name} secondary={number} />
            </ListItem>
          </List>
        </Demo>
      </Grid>
    </>
  );
};

ContactItem.ropTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
};

{
  /* <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          Avatar with text and icon
        </Typography> */
}
// className={css.item}

// <IconButton edge="end" aria-label="delete">
//   <DeleteIcon
//     fontSize="large"
//     // sx={{ color: 'black' }}
//     onClick={onDelete}
//   />
// </IconButton>

{
  /* <Button variant="contained" type="button" size="sm" onClick={onDelete}>
      <DeleteIcon />Delete
      </Button> */
}
{
  /* <button type="button" onClick={onDelete}>
        Delete
      </button> */
}

{
  /* <Grid display="flex">
<p>{name}</p>
<p>{number}</p>

<IconButton>
  <Typography>
    <DeleteIcon
      fontSize="large"
      // sx={{ color: 'black' }}
      onClick={onDelete}
    />
  </Typography>
</IconButton>
</Grid> */
}
