import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { IconButton, Typography } from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <IconButton>
        <Typography>
          <NavLink to="/">
            <HomeIcon fontSize="large" sx={{ color: 'white' }}/>
          </NavLink>
        </Typography>
      </IconButton>

      {isLoggedIn && <NavLink to="/contacts" style={{ textDecoration: 'none', color: 'white' }}>Contacts</NavLink>}
    </nav>
  );
};
