import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
//import PostView from '../commponent/write/PostView';
import PostViewerContainer from '../containers/post/PostViewerContainer';

const PostPage = () => {
  return (
    <>
      <HeaderContainer />
      <PostViewerContainer />
    </>
  );
};

export default PostPage;
