
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
