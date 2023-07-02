import PropTypes from 'prop-types';
// import css from '../ContactList/ContactList.module.css';
import { Grid, IconButton, List, ListItem, Typography } from '@mui/material';

import { styled } from '@mui/material/styles';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';


import PhoneIcon from '@mui/icons-material/Phone';
import DeleteIcon from '@mui/icons-material/Delete';


const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export const ContactItem = ({ name, number, onDelete }) => {


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

