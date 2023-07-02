// import PropTypes from 'prop-types';
// import css from '../ContactList/ContactList.module.css';
import { ContactItem } from '../ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
// import { contactsDeleteAction } from 'Redux/contacts.slice';
import { cloneElement, useEffect, useState } from 'react';

import * as contactsOperations from '../../Redux/contact/contactsOperations';
import * as contactsSelectors from '../../Redux/contact/contactsSelectors';
import { Grid } from '@mui/material';


export const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(contactsSelectors.getFilterContacts);
  const items = useSelector(contactsSelectors.getItemsContacts);

  const [dense, setDense] = useState(false);
  const [secondary, setSecondary] = useState(false);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = id => {
    // dispatch(contactsDeleteAction(id));
    dispatch(contactsOperations.deleteContacts(id));
  };

  const filterContacts = items.filter(item => {
    return item.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <>

      {items.length > 0 && (
        <Grid>
          {filterContacts.map(({ id, name, number }) => {
            const deleteContact = () => {
              handleDeleteContact(id);
            };
            return (
              <ContactItem
                key={id}
                name={name}
                number={number}
                onDelete={deleteContact}
              />
            );
          })}
        </Grid>
      )}
    </>
  );
};
//className={css.list}

// ContactList.propTypes = {
//   // contacts: PropTypes.array.isRequired,
//   // onDelete: PropTypes.func.isRequired,
// };
