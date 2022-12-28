import { ContactsItem, ButtonDelete, Input } from './ContactList.styled';

import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';
import { filterContacts } from 'redux/contactsSlice';

export const ContactList = ({ name }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const normolizeFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normolizeFilter)
  );

    const handleChange = e => {
      dispatch(filterContacts(e.currentTarget.value));
    };

  return (
    <ContactsItem>
      <p>{name}</p>
      <label title="Find contacts by name">
        <Input
          type="text"
          name="filter"
          placeholder="Find contact"
          onChange={handleChange}
          value={filter}
        />
      </label>
      <ul>
        {visibleContacts.map(contact => (
          <li key={contact.id}>
            <span>
              {contact.name} {contact.number}
            </span>
            <ButtonDelete
              type="button"
              name="Delete"
              id={contact.id}
              onClick={() => dispatch(removeContact(contact.id))}
            >
              Delete
            </ButtonDelete>
          </li>
        ))}
      </ul>
    </ContactsItem>
  );
};

ContactList.propTypes = {
  name: PropTypes.string.isRequired,
};

