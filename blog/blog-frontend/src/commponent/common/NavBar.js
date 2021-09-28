import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';

const NavPanel = styled(Responsive)`
  border-radius: 3px;
  border: 0;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  top: 100%;
  min-width: 160px;
  padding: 5px 0;
  margin: 2px 0 0;
  font-size: 1rem;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
`;

const NavBar = () => {
  return <NavPanel>React Navigation</NavPanel>;
};

export default NavBar;
