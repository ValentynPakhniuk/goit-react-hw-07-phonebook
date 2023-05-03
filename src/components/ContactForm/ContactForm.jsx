import { Button } from 'components/Button/Button.styled';
import { Box, Form } from './ContainerForm.styled';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleClick = event => {
    event.preventDefault();
    const form = event.target.elements;

    dispatch(addContact(form.name.value, form.number.value));
  };

  return (
    <Form onSubmit={handleClick}>
      <Box>
        <div>
          <label htmlFor="exampleInputName">Name</label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </div>
        <div>
          <label htmlFor="exampleInputNumber">Number</label>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </div>
        <Button type="submit">Add contact</Button>
      </Box>
    </Form>
  );
};
