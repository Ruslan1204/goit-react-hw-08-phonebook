import { Container, Grid, Typography, Button } from '@mui/material';

import { styled } from '@mui/material/styles';

const Wraper = styled('div')(({ theme }) => ({
  position: 'relative',
  color: theme.palette.common.white,
  marginBottom: theme.spacing(6),

  width: '100',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
}));

const Wrap = styled('div')(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(14),
}));

const Overlay = styled('div')(() => ({
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  backgroundOverlay: 'rgba(0,0,0,.3)',
}));

export default function Home() {
  return (
    <Wraper
      style={{ backgroundImage: `url(https://source.unsplash.com/random)` }}
    >
      <Container fixed>
        <Overlay />
        <Grid container>
          <Grid item md={6}>
            <Wrap>
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
              >
                My Phone Contacts
              </Typography>
              <Typography component="h5" color="inherit" paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
              <Button variant="contained" color="error">
                Contacts
              </Button>
            </Wrap>
          </Grid>
        </Grid>
      </Container>
    </Wraper>
  );
}
