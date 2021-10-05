import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import UserInfo from '../../commponent/auth/UserInfo';
import { listPosts } from '../../modules/posts';
import { check } from '../../modules/user';
import qs from 'qs';

const UserInfoContainer = ({ match, location }) => {
  // 마운트될때 user info 읽기 api 요청
  const { userId } = match.params;
  const dispatch = useDispatch();

  const { user, error, posts } = useSelector(({ user, error, posts }) => ({
    user: user.user,
    error: user.error,
    posts: posts.posts,
  }));

  console.log('userId:', userId);

  useEffect(() => {
    dispatch(check(userId));
  }, [dispatch, userId]);

  return <UserInfo user={user} posts={posts} error={error} />;
};

export default withRouter(UserInfoContainer);
