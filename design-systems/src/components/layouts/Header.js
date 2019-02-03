import React from 'react';
import logo from '../../logo.svg';
import styled from 'styled-components';

const Header = ({ className }) => (
    <header className={className}>
        <img src={logo} alt="logo" className="logo" />
    </header>
);

export default styled(Header)`
    background: #524763;
    padding: 10px 5%;

    .logo {
        width: 60px;
    }
`;
