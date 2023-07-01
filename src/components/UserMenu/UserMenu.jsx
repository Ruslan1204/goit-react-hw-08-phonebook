import { useDispatch } from 'react-redux';
import { logOut } from '../../Redux/auth/authOperations';


import { useAuth } from '../../hooks/useAuth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handelClick = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <p>{user.email}</p>
      <button type="button" onClick={handelClick}>
        Logout
      </button>
    </div>
  );
};
