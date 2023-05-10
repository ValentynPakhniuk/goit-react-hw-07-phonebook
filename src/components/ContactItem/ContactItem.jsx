import { Button } from 'components/Button/Button.styled';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Item } from './ContactItem.styled';
import { deleteContactsThunk } from 'redux/operations';
import { useState } from 'react';
import { selectIsLoading } from 'redux/selectors';

export const ContactItem = ({ contact: { name, number, id } }) => {
  const [contactId, setContactId] = useState(null);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContactsThunk(id));
    setContactId(id);
  };
  return (
    <Item key={id}>
      <div>
        <p>
          {name}: {number}
        </p>
        <Button
          type="button"
          onClick={() => handleDelete()}
          disabled={isLoading && contactId === id}
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
