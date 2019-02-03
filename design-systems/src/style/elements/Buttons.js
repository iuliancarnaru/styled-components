import styled from 'styled-components';
import { fixedTop } from '../utilities';

const color = "white";

export const Button = styled.button`
  background-color: green;
  padding: 5px 20px;
  border-radius: 5px;
  border: none;
  color: ${color};
  font-size: 2rem;
  
`;

export const CancelButton = styled(Button)`
  background-color: tomato;
  ${fixedTop};
`;