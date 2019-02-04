import { css } from 'styled-components';

export const fixed = ({ x = 0, y = 0, yProp = 'top', xProp = 'left' } = {}) => css`
    position: fixed;
    ${xProp}: ${y};
    ${yProp}: ${x};
`;
export const absolute = ({ x = 0, y = 0, yProp = 'top', xProp = 'left' } = {}) => css`
    position: absolute;
    ${xProp}: ${y};
    ${yProp}: ${x};
`;

