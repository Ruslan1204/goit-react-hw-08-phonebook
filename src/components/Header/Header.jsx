import {
  AppBar,
  Box,
  Container,
  // IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Navigation } from '../Navigation/Navigation';

import { useAuth } from '../../hooks/useAuth';
import { AuthNav } from 'components/AuthNav/AuthNav';

export const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <AppBar position="fixed">
      <Container fixed>
        <Toolbar>
          {/* <IconButton edge="start" color="inherit">
            <MenuIcon />
          </IconButton> */}
          <Typography
            color="inherit"
            variant="h6"
            component="span"
            sx={{ flexGrow: 1 }}
          >
            <Navigation />
          </Typography>
          <Box mr={3}>{isLoggedIn ? <UserMenu /> : <AuthNav />}</Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
