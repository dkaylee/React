import React from 'react';
import Pagination from '../../commponent/posts/Pagination';
import { useSelector } from 'react-redux';
import qs from 'qs';
import { withRouter } from 'react-router-dom';

const PaginationContainer = ({ location }) => {
  const { lastPage, posts, loading } = useSelector(({ posts, loading }) => ({
    lastPage: posts.lastPage,
    posts: posts.posts,
    loading: loading['posts/LIST_POSTS'],
  }));

  // 포스트 데이터가 없거나 로딩중이면 아무것도 보여 주지 않음
  if (!posts || loading) return null;

  // page가 없으면 1을 기본값으로 사용
  const {
    tag,
    username,
    page = 1,
  } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  return (
    <Pagination
      tag={tag}
      username={username}
      page={parseInt(page, 10)}
      lastPage={lastPage}
    />
  );
};

export default withRouter(PaginationContainer);
