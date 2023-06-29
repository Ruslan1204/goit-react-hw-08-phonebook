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
    <form onSubmit={handleSubmit}>
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
    </form>
  );
};

export default RegisterForm;
