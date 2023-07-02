import { Grid, TextField, Button } from '@mui/material';
import { register } from 'Redux/auth/authOperations';
import { useDispatch } from 'react-redux';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
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
            label="Name"
            // value={name}
            variant="outlined"
            name="name"
            sx={{ mr: 3 }}
          />

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
          Sign up
        </Button>
      </form>
    </Grid>
  );
};

export default RegisterForm;

{
  /* <form onSubmit={handleSubmit}>
<label>
  <p>Name</p>
  <input type="text" name="name" />
</label>
<label>
  <p>Email</p>
  <input type="email" name="email" />
</label>
<label>
  <p>Password</p>
  <input type="password" name="password" />
</label>
<button type="submit">Register</button>
</form> */
}
