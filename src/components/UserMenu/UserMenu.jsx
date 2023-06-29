import { useDispatch } from 'react-redux';
import { logOut } from '../../Redux/auth/authOperations';
import { useAuth } from '../../hooks/useAuth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <p>{user.user.email}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};

