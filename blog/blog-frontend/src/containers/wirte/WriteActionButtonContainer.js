import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import { writePost, updatePost } from '../../modules/write';
import WriteActionButtons from '../../commponent/write/WriteActionButton';

const WriteActionButtonContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { title, body, tags, files, post, postError, originalPostId } =
    useSelector(({ write }) => ({
      title: write.title,
      body: write.body,
      tags: write.tags,
      files: write.files,
      post: write.post,
      postError: write.postError,
      originalPostId: write.originalPostId,
    }));

  // 포스트 등록
  const onPublish = () => {
    if (!title || !body) {
      alert('제목과 내용을 입력해주세요');
      return;
    }
    if (originalPostId) {
      dispatch(updatePost({ title, body, tags, files, id: originalPostId }));
      return;
    }
    dispatch(
      writePost({
        title,
        body,
        tags,
        files,
      }),
    );
  };

  // 취소
  const onCancel = () => {
    history.goBack();
  };

  // 성공 혹은 실패시 작업
  useEffect(() => {
    if (post) {
      const { _id, user } = post;
      history.push(`/@${user.username}/${_id}`);
    }
    if (postError) {
      console.log(postError);
    }
  }, [history, post, postError]);

  return (
    <WriteActionButtons
      onPublish={onPublish}
      onCancel={onCancel}
      isEdit={!originalPostId}
    />
  );
};
// 라우트가 아닌 컴포넌트에서 history 객체를 사용하기 위해 withRouter
export default withRouter(WriteActionButtonContainer);
