import { contactsFilterAction } from 'Redux/filter.slice';

import { useDispatch } from 'react-redux';

// import * as contactsSelectors from '../../Redux/contact/contactsSelectors';
import { TextField } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();
  // const filter = useSelector(contactsSelectors.getFilterContacts);

  const changeFilter = evt => {
    const { value } = evt.target;
    // dispatch(contactsFilterAction(value));
    dispatch(contactsFilterAction(value));
  };

  return (
    <>
      <h4>Here you can filter your contacts</h4>
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
