import {PropTypes} from 'prop-types';

import { ContactsItem, ButtonDelete, Input } from './ContactList.styled';
import { useGetContactsQuery } from 'redux/contactsApi';
import {useDeleteContactMutation} from 'redux/contactsApi'
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';

export const ContactList = ({ name }) => {
  const { data, error, isLoading } = useGetContactsQuery();
  console.log('data', data);
  console.log('error', error);
  console.log('isLoading', isLoading);

  const filter = useSelector(state => state.filter);
  const normolizeFilter = filter.toLowerCase();
  const visibleContacts = data.filter(contact =>
    contact.name.toLowerCase().includes(normolizeFilter)
  );

  const [deleteContact, result] = useDeleteContactMutation();
  console.log(result);

  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(filterContacts(e.currentTarget.value));
  };

  return (
    <ContactsItem>
      {/* <p>{name}</p> */}
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
        {visibleContacts.map(data => (
          <li key={data.id}>
            <span>
              {data.name}: {data.number}
            </span>
            <ButtonDelete
              type="button"
              name="Delete"
              id={data.id}
              onClick={() => deleteContact(data.id)}
              disabled={result.isLoading}
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
