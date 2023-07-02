import { Button, Grid, TextField } from '@mui/material';
import { logIn } from 'Redux/auth/authOperations';
import { useDispatch } from 'react-redux';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
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
      <form onSubmit={handleSubmit}>
        <h1>Phonebook</h1>
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

{
  /* <form onSubmit={handleSubmit} autoComplete="off">
<label>
  <p>Email</p>
  <input type="email" name="email" />
</label>
<label>
  <p>Password</p>
  <input type="password" name="password" />
</label>
<button type="submit">Log In</button>
</form> */
}