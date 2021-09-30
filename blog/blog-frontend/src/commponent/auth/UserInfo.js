import React from 'react';
import styled from 'styled-components';
import Tab from '../common/Tab';
import { FaGrinWink, FaListAlt, FaPen } from 'react-icons/fa';

const UserInfoBlock = styled.div`
  background-color: white;
  padding: '70px 0';
  justify-content: center;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.125);
  h2 {
    margin: 2rem;
  }
  p {
    margin-bottom: 3rem;
  }
`;

// const content = [
//   {
//     tab: 'my page',
//     content: '마이페이지입니다.',
//     icon: <FaGrinWink className="tabIcon" />,
//   },
//   {
//     tab: 'my post',
//     content: '내가 쓴 게시물 입니다.',
//     icon: <FaListAlt className="tabIcon" />,
//   },
//   {
//     tab: 'my log',
//     content: '수정 기록입니다.',
//     icon: <FaPen className="tabIcon" />,
//   },
// ];

const UserInfo = ({ user }) => {
  console.log('user:', user);

  const content = [
    {
      tab: 'my page',
      content: (
        <UserInfoBlock>
          <p>{user.username}</p>
          <p>{user._id}</p>
        </UserInfoBlock>
      ),
      icon: <FaGrinWink className="tabIcon" />,
    },
    {
      tab: 'my post',
      content: '내가 쓴 게시물 입니다.',
      icon: <FaListAlt className="tabIcon" />,
    },
    {
      tab: 'my log',
      content: '수정 기록입니다.',
      icon: <FaPen className="tabIcon" />,
    },
  ];

  if (!user) {
    return <UserInfoBlock>오류발생 로그인해주세요.</UserInfoBlock>;
  }

  return (
    <>
      <Tab content={content} user={user} />
    </>
  );
};

export default UserInfo;
