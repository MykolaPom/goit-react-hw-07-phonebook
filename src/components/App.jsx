import { MainContainer } from './Main/Main';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { useGetContactsQuery } from 'redux/contactsApi';
// 
export const App = () => {
  const { data, error, isLoading } = useGetContactsQuery();
  
  return (
    <MainContainer title="Phonebook">
      <h1>Phonebook</h1>

      <ContactForm />
      <h2>Contacts</h2>

      {!isLoading && data.length > 0 ? (
        <ContactList name="Contacts" />
      ) : (
        <p>Phonebook is empty</p>
      )}
      {error && <p>Sorry.. something went wrong. Please, try again.</p>}
    </MainContainer>
  );
};
