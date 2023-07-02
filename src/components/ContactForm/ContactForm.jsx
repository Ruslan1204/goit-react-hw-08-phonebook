import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'Redux/contact/contactsOperations';
import * as contactsSelectors from '../../Redux/contact/contactsSelectors';
import { Button, Grid, TextField } from '@mui/material';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const items = useSelector(contactsSelectors.getItemsContacts);

  const handleAddContacts = () => {
    const mapName = items
      .map(item => {
        return item.name;
      })
      .join('')
      .includes(name);
    if (!mapName) {
      dispatch(addContacts({ name, number }));
    } else {
      return alert(`${name} is already in contacts.`);
    }
  };

  const handleChangeForm = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;

    handleAddContacts(name, number);

    setName('');
    setNumber('');

    form.reset();
  };

  return (
    <Grid container>
      <form onSubmit={handleSubmit}>
        <h4>To add a new contact, enter a name and number</h4>
        <Grid display="flex">
          <TextField
            onChange={handleChangeForm}
            id="outlined-controlled"
            label="Name"
            value={name}
            variant="outlined"
            name="name"
            sx={{ mr: 3 }}
          />

          <TextField
            onChange={handleChangeForm}
            // id="outlined-basic"
            id="outlined-controlled"
            label="Number"
            variant="outlined"
            name="number"
            value={number}
          />
        </Grid>
        <Button variant="contained" type="submit" sx={{ mt: 2 }} size="sm">
          Add contact
        </Button>
      </form>
    </Grid>
  );
};

