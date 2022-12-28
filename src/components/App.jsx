import { ContactForm } from './ContactForm/ContactForm';
import { MainContainer } from './Main/Main';
import { ContactList } from './ContactList/ContactList';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(state => state.contacts.items);

  return (
    <MainContainer title="Phonebook">
      <h1>Phonebook</h1>

      <ContactForm />
      <h2>Contacts</h2>

      {contacts.length > 0 ? (
        <ContactList name="Contacts" />
      ) : (
        <p>Phonebook is empty</p>
      )}
    </MainContainer>
  );
};
