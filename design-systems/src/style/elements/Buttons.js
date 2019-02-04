import styled from 'styled-components';
import { teal, elevation } from '../utilities';


export const Button = styled.button`
  background-color: ${teal};
  ${elevation[1]};
  padding: 5px 20px;
  border-radius: 5px;
  border: none;
  color: white;
  font-size: 2rem;
  transition: all .2s ease;

  ${({size}) => {
    if(size === 'small'){
      return`
        font-size: 1rem;
        padding: 3px 10px;
      `
    }
  }}
  ${({type}) => {
    if(type === 'cancel'){
      return`
        background: tomato;
      `
    }
  }}

  &:hover {
    ${elevation[2]};
  }
`;

export const CancelButton = styled(Button)`
  background-color: tomato;
`;