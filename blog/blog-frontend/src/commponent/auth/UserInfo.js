import React from 'react';
import styled from 'styled-components';
import Tab from '../common/Tab';
import { FaGrinWink, FaListAlt, FaPen } from 'react-icons/fa';
import PostList from '../posts/PostList';

const UserInfoBlock = styled.div`
  background-color: white;
  padding: 70px 0;
  justify-content: center;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.125);
`;

const ContentBlock = styled.div`
  background: #eee;
  margin: 3rem;
  padding: 3rem;
  justify-content: center;
  border-radius: 10px;

  h2 {
    text-align: left;
    font-weight: 600;
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

const Mypage = ({ user }) => {
  const { username, _id } = user;
  console.log(username, '(', _id, ')', '가 입장하셨습니다.');

  return (
    <ContentBlock>
      <h2>{username}님 안녕하세요.</h2>
    </ContentBlock>
  );
};

const Mypost = ({ posts }) => {
  const { mypost } = posts;
  console.log('내가 쓴 포스트', mypost);

  return <PostList posts={mypost} />;
};

const UserInfo = ({ user, posts }) => {
  console.log('user:', user);
  console.log('::post::', posts);

  const content = [
    {
      tab: 'my page',
      content: <Mypage user={user} />,
      icon: <FaGrinWink className="tabIcon" />,
    },
    {
      tab: 'my post',
      content: <Mypost posts={posts} />,
      icon: <FaListAlt className="tabIcon" />,
    },
    {
      tab: 'my log',
      content: '수정 기록입니다.',
      icon: <FaPen className="tabIcon" />,
    },
  ];

  if (!user.name && user.name === null) {
    return <UserInfoBlock>오류발생 로그인해주세요.</UserInfoBlock>;
  }

  return (
    <>
      <Tab content={content} user={user} />
    </>
  );
};

export default UserInfo;
