import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Helmet } from 'react-helmet';
// import { useDispatch, useSelector } from 'react-redux';
// import css from '../components/App.module.css';
import { Container, Grid } from '@mui/material';

export default function Contacts() {
  //   const dispatch = useDispatch();
  //   const isLoading = useSelector(selectLoading);

  // useEffect(() => {
  //   dispatch(fetchTasks());
  // }, [dispatch]);
  // sx={{ width: '50ch', mr: 0 }}
  return (
    <>
      <Container fixed >
        <Grid display="flex" justifyContent="center">
          <Grid item mt={3}>
            <Helmet>
              <title>Your contacts</title>
            </Helmet>
            {/* <div>{isLoading && 'Request in progress...'}</div> */}
            {/* <div className={css.container}> */}

            <ContactForm />

            <Filter />
            <ContactList />
            {/* </div> */}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
