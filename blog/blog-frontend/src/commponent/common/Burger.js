import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';
import RightNav from './RightNav';
import { FiAlignJustify } from 'react-icons/fi';

const BurgerBtn = styled.button`
  padding: 0.5rem;
  display: none;
  background: transparent;
  border: none;
  align-items: center;
  font-size: 30px;
  position: absolute;
  right: 50px;
  color: ${palette.gray[7]};
  cursor: pointer;
  z-index: 20;

  &:hover {
    border-radius: 4rem;
    background: ${palette.gray[1]};
    color: ${palette.cyan[7]};
  }
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
`;

const Burger = ({ user, onLogout }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <BurgerBtn open={open} onClick={() => setOpen(!open)}>
        <FiAlignJustify />
      </BurgerBtn>
      <RightNav open={open} user={user} onLogout={onLogout} />
    </>
  );
};

export default Burger;
