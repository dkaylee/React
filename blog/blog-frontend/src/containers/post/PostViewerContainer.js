import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import PostView from '../../commponent/post/PostView';
import { readPost, unloadPost } from '../../modules/post';
import PostActionButtons from '../../commponent/post/PostActionButtons';
import { setOriginalPost } from '../../modules/write';
import user from '../../modules/user';
import { removePost } from '../../lib/api/posts';

const PostViewerContainer = ({ match, history }) => {
  // 처음마운트될때 포스트 읽기 API 요청
  const { postId } = match.params;
  const dispatch = useDispatch();
  const { post, error, loading } = useSelector(({ post, loading, user }) => ({
    post: post.post,
    error: post.error,
    loading: loading['post/READ_POST'],
    user: user.user,
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

  const onEdit = () => {
    dispatch(setOriginalPost(post));
    history.push('/write');
  };

  const onRemove = async () => {
    try {
      await removePost(postId);
      history.push('/postlist'); // 홈으로 이동
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <PostView
      post={post}
      loading={loading}
      error={error}
      actionButtons={<PostActionButtons onEdit={onEdit} onRemove={onRemove} />}
      ownPost={user && user.id === post && post.id}
    />
  );
};

export default withRouter(PostViewerContainer);
