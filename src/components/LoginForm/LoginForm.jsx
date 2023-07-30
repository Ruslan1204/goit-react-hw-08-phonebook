import { Button, Grid, TextField } from '@mui/material';
import { logIn } from 'Redux/auth/authOperations';
import { useDispatch } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../hooks/useAuth';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    if (!isLoggedIn) {
      toast.error('Enter your email and password to log in', {
        theme: 'colored',
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Grid container justifyContent="center">
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <h4>Please enter your login and password</h4>
        <Grid display="flex">
          <TextField
            id="outlined-basic"
            // id="outlined-controlled"
            label="Email"
            variant="outlined"
            name="email"
            // value={email}
            sx={{ mr: 3 }}
          />

          <TextField
            id="outlined-password-input"
            type="password"
            autoComplete="current-password"
            // id="outlined-controlled"
            label="Password"
            variant="outlined"
            name="password"
            // value={number}
          />
        </Grid>
        <Button
          variant="contained"
          type="submit"
          sx={{ mt: 2 }}
          size="sm"
          color="primary"
        >
          Log In
        </Button>
      </form>
    </Grid>
  );
};

export default LoginForm;
