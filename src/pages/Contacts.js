import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Helmet } from 'react-helmet';
// import { useDispatch, useSelector } from 'react-redux';
import css from '../components/App.module.css';

export default function Contacts() {
  //   const dispatch = useDispatch();
  //   const isLoading = useSelector(selectLoading);

  // useEffect(() => {
  //   dispatch(fetchTasks());
  // }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      {/* <div>{isLoading && 'Request in progress...'}</div> */}
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />

        <ContactList />
      </div>
    </>
  );
}
