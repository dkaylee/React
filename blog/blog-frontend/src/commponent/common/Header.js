import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import palette from '../../styles/palette';
import Burger from './Burger';
import { Link } from 'react-router-dom';

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
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Link to="/" className="logo">
            React
          </Link>
          <Burger user={user} onLogout={onLogout} />
        </Wrapper>
      </HeaderBlock>
    </>
  );
};

export default Header;
