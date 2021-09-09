import React from 'react';
import '../commponent/common/Button.css';
//import PostList from '../commponent/posts/PostList';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostListContainer from '../containers/posts/PostListContainer';

const PostListPage = () => {
  return (
    <div>
      <HeaderContainer />
      <PostListContainer />
    </div>
  );
};

export default PostListPage;
