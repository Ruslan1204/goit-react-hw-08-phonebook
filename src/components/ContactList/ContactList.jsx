// import PropTypes from 'prop-types';
import css from '../ContactList/ContactList.module.css';
import { ContactItem } from '../ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
// import { contactsDeleteAction } from 'Redux/contacts.slice';
import { useEffect } from 'react';

import * as contactsOperations from '../../Redux/contactsOperations';
import * as contactsSelectors from '../../Redux/contactsSelectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(contactsSelectors.getFilterContacts);
  const items = useSelector(contactsSelectors.getItemsContacts);

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
        <ul className={css.list}>
          {filterContacts.map(({ id, name, number }) => {
            const deleteContact = () => {
              handleDeleteContact(id);
            };
            return (
              <ContactItem
                key={id}
                id={id}
                name={name}
                number={number}
                onDelete={deleteContact}
              />
            );
          })}
        </ul>
      )}
    </>
  );
};

// ContactList.propTypes = {
//   // contacts: PropTypes.array.isRequired,
//   // onDelete: PropTypes.func.isRequired,
// };
