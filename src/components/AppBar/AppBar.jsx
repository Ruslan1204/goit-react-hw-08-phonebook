// import { Navigation } from '../Navigation/Navigation';
// import { useAuth } from '../../hooks/useAuth';
// import { AuthNav } from 'components/AuthNav/AuthNav';
// import { UserMenu } from 'components/UserMenu/UserMenu';
import { Header } from 'components/Header/Header';


export const AppBar = () => {
  // const { isLoggedIn } = useAuth();

  return (
    <header>
      <Header />
      {/* <Navigation /> */}
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
    </header>
  );
};
