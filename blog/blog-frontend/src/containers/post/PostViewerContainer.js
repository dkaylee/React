import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import PostView from '../../commponent/post/PostView';
import { readPost, unloadPost } from '../../modules/post';

const PostViewerContainer = ({ match }) => {
  // 처음마운트될때 포스트 읽기 API 요청
  const { postId } = match.params;
  const dispatch = useDispatch();
  const { post, error, loading } = useSelector(({ post, loading }) => ({
    post: post.post,
    error: post.error,
    loading: loading['post/READ_POST'],
  }));

  console.log('postId::', postId);

  useEffect(() => {
    dispatch(readPost(postId));
    // 언마운트될때 리덕스에서 포스트 데이터 없애기
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, postId]);

  console.log('post::', post);

  return <PostView post={post} loading={loading} error={error} />;
};

export default withRouter(PostViewerContainer);
