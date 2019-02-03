import styled from 'styled-components';
import { above } from '../utilities';

export const Heading = styled.h1`
  font-size: 2rem;
  color: greenyellow;

  ${above.medium`
    color: blue;
  `}
`;

