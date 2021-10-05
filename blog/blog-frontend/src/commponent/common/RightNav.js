import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../styles/palette';
import Button from './Button';

const RightBlock = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media screen and (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: ${palette.gray[1]};
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    box-shadow: '0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)';
    z-index: 19;

    li {
      color: ${palette.gray[7]};
      border-bottom: black;
    }
  }
  .right {
    display: flex;
    align-items: center;
    padding-right: 50px;
    /* @media screen and (max-width: 920px) {
      display: none;
    } */
  }
`;

const UserInfo = styled.button`
  font-size: 0.8rem;
  font-weight: 600;
  margin-right: 1rem;
  color: ${palette.gray[8]};
  background: transparent;
  border: none;
`;

const RightNav = ({ open, user, onLogout }) => {
  console.log('user?', user);

  return (
    <RightBlock open={open}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/postlist">Postlist</Link>
      </li>
      <li>
        <Link to="/write">Writepage</Link>
      </li>
      {user ? (
        <li className="right">
          <Link to={`/mypage`}>
            <UserInfo>{user.username}</UserInfo>
          </Link>
          <Button onClick={onLogout}>로그아웃</Button>
        </li>
      ) : (
        <li className="right">
          <Button to="/login">로그인</Button>
        </li>
      )}
    </RightBlock>
  );
};

export default RightNav;
