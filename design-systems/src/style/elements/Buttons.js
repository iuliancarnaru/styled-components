import styled from 'styled-components';
import { elevation } from '../utilities';
import { lighten } from 'polished';
import { applyStyleModifiers } from 'styled-components-modifiers';


const BUTTON_MODIFIERS = {
  small: () => `
    font-size: 1rem;
    padding: 3px 10px;
  `,

  cancel: ({ theme }) => `
    background: ${theme.colors.secondary};
  `
}

export const Button = styled.button`
  background-color: ${props => props.theme.colors.primary};
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
  background-color: ${props => props.theme.colors.secondary};
  &:hover {
    background: ${lighten(0.2, 'tomato')};
  }
`;