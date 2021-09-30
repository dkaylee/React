import React, { useState } from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import Button from '../common/Button';
import { FiAlignJustify } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import palette from '../../styles/palette';

const HeaderBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  box-shadow: 0 1px 9px 0 rgba(0, 0, 0, 0.14);
  position: relative;
`;

// Responsive 컴포넌트 속성에 스타일을 추가해서 새로운 컴포넌트 생성
const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  position: relative;
  background-color: white;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.14);

  .logo {
    color: #6cb2e2;
    font-size: 1.25rem;
    font-weight: 800;
    margin: 0 2rem;
    position: flex;
    width: 30%;
    &:hover {
      color: ${palette.gray[5]};
    }
  }
  .right {
    display: flex;
    align-items: center;
    padding-right: 50px;
    @media screen and (max-width: 920px) {
      display: none;
    }
  }
  .navbar_menus {
    display: flex;
    list-style: none;
    position: relative;
    @media screen and (max-width: 920px) {
      display: none;
    }
  }
  .navbar_menu {
    color: #6cb2e2;
    display: inline-block;
    padding-right: 2.5rem;
    font-size: 1rem;
    text-decoration: none;
    &:hover {
      color: ${palette.gray[8]};
    }
  }
`;

// 헤더가 fixed로 되어 있기 때문에 페이지의 콘텐츠가 4rem 아래에 나타나도록 해주는 컴포넌트
// const Spacer = styled.div`
//   height: 4rem;
// `;

const UserInfo = styled.button`
  font-size: 0.8rem;
  font-weight: 600;
  margin-right: 1rem;
  color: ${palette.gray[8]};
  background: transparent;
  border: none;
`;

const Menubar = styled.button`
  padding: 0.5rem;
  display: flex;
  background: transparent;
  border: none;
  align-items: center;
  font-size: 30px;
  position: absolute;
  right: 50px;
  color: ${palette.gray[7]};
  cursor: pointer;
  &:hover {
    border-radius: 4rem;
    background: ${palette.gray[1]};
    color: ${palette.cyan[7]};
  }
  @media screen and (min-width: 920px) {
    display: none;
  }
`;

// const ControlBox = styled.div`
//   display: flex;
//   align-items: center;
//   @media screen and (max-width: 500px) {
//     flex-direction: column;
//     align-items: flex-end;
//     display: ${({ menu }) => {
//       return menu === false ? 'none' : 'flex';
//     }};
//   }
// `;

const Header = ({ user, onLogout }) => {
  const [toggleBar, setToggleBar] = useState(true);

  const onClick = () => {
    setToggleBar(!toggleBar);
  };

  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Link to="/" className="logo">
            React
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

          <Menubar onClick={onClick}>
            <FiAlignJustify />
          </Menubar>

          {user ? (
            <div className="right">
              <Link to={`/mypage`}>
                <UserInfo>{user.username}</UserInfo>
              </Link>
              <Button onClick={onLogout}>로그아웃</Button>
            </div>
          ) : (
            <div className="right">
              <Button to="/login">로그인</Button>
            </div>
          )}
        </Wrapper>
      </HeaderBlock>
    </>
  );
};

export default Header;
