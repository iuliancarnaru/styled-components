import React from 'react';
import logo from '../../logo.svg';
import styled from 'styled-components';
import { purple, elevation, fixed, serif } from '../../style/utilities';

const Header = ({ className }) => (
    <header className={className}>
        <img src={logo} alt="logo" className="logo" />
    </header>
);

export default styled(Header)`
    background: ${purple};
    padding: 10px 5%;
    width: 100%;

    ${serif};
    ${fixed()};
    ${elevation[2]};

    .logo {
        width: 60px;
    }
`;
