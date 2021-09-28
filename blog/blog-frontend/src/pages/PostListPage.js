import React from 'react';
import '../commponent/common/Button.css';
//import PostList from '../commponent/posts/PostList';
import HeaderContainer from '../containers/common/HeaderContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';
import PostListContainer from '../containers/posts/PostListContainer';
import Responsive from '../commponent/common/Responsive';

const PostListPage = () => {
  return (
    <div>
      <HeaderContainer />
      <Responsive>
      <PostListContainer />
      <PaginationContainer />
      </Responsive>
    </div>
  );
};

export default PostListPage;
