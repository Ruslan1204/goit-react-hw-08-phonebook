import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div>
      <NavLink to="/logIn" style={{ textDecoration: 'none'}}>
        <Button  variant="contained" sx={{ mr: 2, color: 'white' }}>
          Log In
        </Button>
      </NavLink>
      <NavLink to="/register" style={{ textDecoration: 'none' }}>
        <Button color="error" variant="contained">
          Sign up
        </Button>
      </NavLink>
    </div>
  );
};
