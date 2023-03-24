import { useDispatch, useSelector } from 'react-redux';
import { delContact } from 'redux/contacts/operations';
import { getContacts, getFilter } from 'redux/contacts/selectors';
import css from './ContactList.module.css';

const getVisibleContacts = (contacts, filter) => {
  if (!filter) {
    return contacts;
  } else {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  }
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);

  const dispatch = useDispatch();
  const handleDelete = id => dispatch(delContact(id));

  return (
    <div>
      <ul className={css.ContactList_ul}>
        {visibleContacts.map((contact, id) => (
          <li className={css.ContactList_li} key={id}>
            {contact.name}: {contact.number}
            <button className={css.ContactList_button}
              type="button"
              
              onClick={() => handleDelete(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
