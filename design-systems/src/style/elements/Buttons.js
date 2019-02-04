import styled from 'styled-components';
import { teal, elevation } from '../utilities';
import { lighten } from 'polished';
import { applyStyleModifiers } from 'styled-components-modifiers';


const BUTTON_MODIFIERS = {
  small: () => `
    font-size: 1rem;
    padding: 3px 10px;
  `,

  cancel: () => `
    background: tomato;
  `
}

export const Button = styled.button`
  background-color: ${teal};
  ${elevation[1]};
  padding: 5px 20px;
  border-radius: 5px;
  border: none;
  color: white;
  font-size: 2rem;
  transition: all .2s ease;

  &:hover {
    ${elevation[2]};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const CancelButton = styled(Button)`
  background-color: tomato;
  &:hover {
    background: ${lighten(0.2, 'tomato')};
  }
`;