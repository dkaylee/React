import React from 'react';
import styled from 'styled-components';

const UserInfoBlock = styled.div`
  width: 50%auto;
  margin: 4rem;
  background-color: #eee;
  border-radius: 4px;
  justify-content: center;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.125);
  h2 {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 3rem;
  }
`;

const UserInfo = ({ user }) => {
  console.log('user:', user);

  return (
    <UserInfoBlock>
      <h2>{user.username}</h2>
    </UserInfoBlock>
  );
};

export default UserInfo;
