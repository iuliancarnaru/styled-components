import React from 'react';
import logo from '../../logo.svg';
import styled from 'styled-components';

const Header = () => {
  return (
    <AppHeader>
        <img src={logo} alt="logo" className="logo" />
    </AppHeader>
  );
};

const AppHeader = styled.header`
    background: #524763;
    padding: 10px 5%;
    
    .logo {
        width: 60px;
    }
`;

export default Header;
