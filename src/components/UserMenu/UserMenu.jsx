import { useDispatch } from 'react-redux';
import { logOut } from '../../Redux/auth/authOperations';
import { Button, Grid, Typography } from '@mui/material';


import { useAuth } from '../../hooks/useAuth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handelClick = () => {
    dispatch(logOut());
  };

  return (
    <Grid display="flex" alignItems="center">
      <Typography sx={{ mr: 2 }}>{user.email}</Typography>
      <Button color="error" onClick={handelClick} variant='contained'>Logout</Button>
    </Grid>
  );
};
