import { Button } from 'components/Button/Button.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import PropTypes from 'prop-types';
import { Item } from './ContactItem.styled';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <Item key={contact.id}>
      <div>
        <p>
          {contact.name}: {contact.number}
        </p>
        <Button type="button" onClick={() => handleDelete(contact.id)}>
          Delete
        </Button>
      </div>
    </Item>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
