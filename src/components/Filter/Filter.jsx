import { contactsFilterAction } from 'Redux/filter.slice';
// import PropTypes from 'prop-types';
// import { filterContacts } from 'Redux/contactsOperations';
import { useDispatch, useSelector } from 'react-redux';

import * as contactsSelectors from '../../Redux/contactsSelectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(contactsSelectors.getFilterContacts);

  const changeFilter = evt => {
    const { value } = evt.target;
    // dispatch(contactsFilterAction(value));
    dispatch(contactsFilterAction(value));
  };

  return (
    <label>
      <p>Find contacts by name</p>
      <input type="text" value={filter} onChange={changeFilter} />
    </label>
  );
};

// Filter.propTypes = {
//   // filter: PropTypes.string.isRequired,
//   // onChange: PropTypes.func,
// };
