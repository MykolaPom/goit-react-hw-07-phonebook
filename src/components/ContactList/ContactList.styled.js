import styled from "@emotion/styled"

export const ContactsItem = styled.div`
  & p {
    margin-bottom: 5px;
  }
  & ul {
    margin-top: 10px;
  }
  & li {
    font-size: 22px;
  }
`;

export const ButtonDelete = styled.button`
  margin-top: 10px;
  margin-left: 10px;
  padding: 5px 10px;
  font-size: 16px;
  background-color: black;
  color: white;
  border: 2px solid black;
  border-radius: 7px;
  cursor: pointer;
  transition: color 250ms linear, background-color 250ms linear;
  &:hover {
    color: black;
    background-color: white;
  }
`;

export const Input = styled.input`
  width: 50%;
  height: 30px;
  font-size: 24px;
`;