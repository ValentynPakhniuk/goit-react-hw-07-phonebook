import { useSelector } from 'react-redux';
import { selectVisibleContact } from 'redux/selectors';
import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContact);

  return (
    <ul>
      {contacts.map(contact => {
        return <ContactItem contact={contact} key={contact.id} />;
      })}
    </ul>
  );
};
