import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readPost, unloadPost } from "";
import PostViewer from "components/Post/PostViewer";

const PostViewerContainer = ({ match, history }) => {
  // 포스트 읽기 api 요청
  const { postId } = match.params;
  const dispatch = useDispatch();
  const { post, error, loading, user } = useSelector(
    ({ post, loading, user }) => ({
      post: post.post,
      error: post.error,
      loading: loading["post/READ_POST"],
      user: user.user,
    })
  );

  useEffect(() => {
    dispatch(readPost(postId));
    // 언마운트될 때 리덕스에서 포스트 데이터 없애기
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, postId]);

  const onEdit = () => {
    dispatch(setOriginalPost(post));
    history.push("/write");
  };

  const onRemove = async () => {
    try {
      await removePost(postId);
      history.push("/"); //홈으로 이동
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <PostViewer
      post={post}
      loading={loading}
      error={error}
      actionButtons={<PostActionButtons onEdit={onEdit} onRemove={onRemove} />}
      ownPost={user && user.id === post && post.id}
    />
  );
};

export default PostViewerContainer();
