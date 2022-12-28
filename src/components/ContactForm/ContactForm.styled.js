import styled from '@emotion/styled';

export const Form = styled.form`
  padding: 15px 10px;
  width: 500px;
  border: 5px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 50%;
  height: 30px;
  font-size: 24px;
`;

export const Paragraph = styled.p`
margin-top: 10px;
margin-bottom: 10px;
font-size: 24px;
`

export const ButtonSubmit = styled.button`
  margin-top: 10px;
  display: block;
  padding: 10px 15px;
  width: 30%;
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

