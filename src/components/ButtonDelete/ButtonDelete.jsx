import { useDeleteContactMutation } from 'redux/contactsApi';
import PropTypes from 'prop-types';
import { ButtonDeleteStyled } from './ButtonDelete.styled';

export const ButtonDelete = ({ id }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  // console.log(isLoading);

  return (
    <ButtonDeleteStyled
      type="button"
      name="Delete"
      id={id}
      onClick={() => deleteContact(id)}
      disabled={isLoading}
    >
      {isLoading ? 'Deleting...' : 'Delete'}
    </ButtonDeleteStyled>
  );
};

ButtonDelete.propTypes = {
  id: PropTypes.string.isRequired,
};
