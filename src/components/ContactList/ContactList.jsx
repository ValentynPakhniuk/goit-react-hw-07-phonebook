// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getContact, getFilterSearchValue } from 'redux/selectors';
import { ContactItem } from 'components/ContactItem/ContactItem';

const getVisibleTasks = (contacts, filterSearchValue) => {
  return filterSearchValue
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterSearchValue.toLowerCase())
      )
    : contacts;
};
export const ContactList = () => {
  const contacts = useSelector(getContact);
  const filterSearchValue = useSelector(getFilterSearchValue);
  const visibleContacts = getVisibleTasks(contacts, filterSearchValue);
  return (
    <ul>
      {visibleContacts.map(contact => {
        return <ContactItem contact={contact} key={contact.id} />;
      })}
    </ul>
  );
};
