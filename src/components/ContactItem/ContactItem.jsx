import { Button } from 'components/Button/Button.styled';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Item } from './ContactItem.styled';
import { deleteContactsThunk } from 'redux/operations';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContactsThunk(contact.id));
  return (
      <Item key={contact.id}>
        <div>
          <p>
            {contact.name}: {contact.number}
          </p>
          <Button
            type="button"
            onClick={() => handleDelete(contact.id)}
          >
            Delete
          </Button>
        </div>
      </Item>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.exact({
    createdAt: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
