import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

const HeaderBlock = styled.div`
  background: #6cb2e2;
  position: fixed;
  width: 100%;
`;

// Responsive 컴포넌트 속성에 스타일을 추가해서 새로운 컴포넌트 생성
const Wrapper = styled(Responsive)`
  color: #fff;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    color: #fff;
    font-size: 2rem;
    font-weight: 800;
  }
  .right {
    display: flex;
    align-items: center;
  }
  .navbar_menus {
    display: flex;
    list-style: none;
    justify-content: space-around;
    width: 50%;
  }
  .navbar_menu {
    color: #fff;
    text-decoration: none;
  }
`;

// 헤더가 fixed로 되어 있기 때문에 페이지의 콘텐츠가 4rem 아래에 나타나도록 해주는 컴포넌트
const Spacer = styled.div`
  height: 4rem;
`;

const UserInfo = styled.div`
  font-weight: 800;
  margin-right: 1rem;
`;

const Header = ({ user, onLogout }) => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Link to="/" className="logo">
            REACT
          </Link>
          <ul className="navbar_menus">
            <li>
              <Link to="/" className="navbar_menu">
                Home
              </Link>
            </li>
            <li>
              <Link to="/postlist" className="navbar_menu">
                Postlist
              </Link>
            </li>
            <li>
              <Link to="/write" className="navbar_menu">
                Writepage
              </Link>
            </li>
          </ul>
          {user ? (
            <div className="right">
              <UserInfo>{user.username}</UserInfo>
              <Button onClick={onLogout}>로그아웃</Button>
            </div>
          ) : (
            <div className="right">
              <Button to="/login">로그인</Button>
            </div>
          )}
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;
