import { contactsFilterAction } from 'Redux/filter.slice';
// import PropTypes from 'prop-types';
// import { filterContacts } from 'Redux/contactsOperations';
import { useDispatch, useSelector } from 'react-redux';

import * as contactsSelectors from '../../Redux/contact/contactsSelectors';
import { Grid, TextField } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(contactsSelectors.getFilterContacts);

  const changeFilter = evt => {
    const { value } = evt.target;
    // dispatch(contactsFilterAction(value));
    dispatch(contactsFilterAction(value));
  };

  return (
    <>
          <h2>Contacts</h2>
      <TextField
        onChange={changeFilter}
        id="outlined-basic"
        label="Filter"
        variant="outlined"
        name="Filter"
        fullWidth
      />
    </>


  );
};

// <label>
//   <p>Find contacts by name</p>
//   <input type="text" value={filter} onChange={changeFilter} />
// </label>

// Filter.propTypes = {
//   // filter: PropTypes.string.isRequired,
//   // onChange: PropTypes.func,
// };