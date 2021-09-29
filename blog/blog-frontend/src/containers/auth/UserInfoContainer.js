import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import UserInfo from '../../commponent/auth/UserInfo';
import { userInfo } from '../../modules/user';

const UserInfoContainer = ({ match, history }) => {
  // 마운트될때 user info 읽기 api 요청
  const { userId } = match.params;
  const dispatch = useDispatch();

  const { user } = useSelector(({ user }) => ({
    user: user.user,
  }));

  console.log('userId:', userId);

  useEffect(() => {
    dispatch(userInfo(userId));
  }, [dispatch, userId]);

  return <UserInfo user={user} />;
};

export default withRouter(UserInfoContainer);
