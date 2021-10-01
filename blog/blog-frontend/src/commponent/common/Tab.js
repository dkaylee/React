import React, { useState } from 'react';
import styled from 'styled-components';

const TabBlock = styled.div`
  width: 100%;
  float: left;
  position: relative;
  display: block;
  border-radius: 30px;
  min-width: 100px;
  text-align: center;
  transition: all 0.3s;
  padding: 10px 15px;
  color: #555555;
  height: auto;
  opacity: 1;
  max-width: 100%;
  margin: 2rem 0;

  .tabBtn {
    margin: 0 2rem;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.8rem 1rem;
    color: white;
    outline: none;
    cursor: pointer;
    background: #393838;
    &:hover {
      background: #999999;
    }
    .tabIcon {
      width: 30px;
      height: 30px;
      display: block;
      margin: 15px;
    }
  }
`;

// const content = [
//   {
//     tab: 'my page',
//     content: '마이페이지입니다.',
//   },
//   {
//     tab: 'my post',
//     content: '내가 쓴 게시물 입니다.',
//   },
// ];

const useTabs = (initialTabs, allTabs) => {
  const [contentIndex, setContentIndex] = useState(initialTabs);
  return {
    contentItem: allTabs[contentIndex],
    contentChange: setContentIndex,
  };
};

const Tab = ({ content, user }) => {
  const { contentItem, contentChange } = useTabs(0, content);
  console.log('content::::', content);
  console.log('Tab user info::::', user);

  return (
    <TabBlock>
      {content.map((section, index) => (
        <button className="tabBtn" onClick={() => contentChange(index)}>
          {section.icon}
          {section.tab}
        </button>
      ))}
      <p>{contentItem.content}</p>
    </TabBlock>
  );
};

export default Tab;
