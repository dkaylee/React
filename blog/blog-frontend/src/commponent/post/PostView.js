import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import palette from '../../styles/palette';
import Responsive from '../common/Responsive';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';

import defaultImg from '../../assets/image/defaultImg.png';

const PostViewBlock = styled(Responsive)`
  margin: 2rem;

  img {
    width: 60%;
    justify-content: center;
    align-items: center;
  }
`;

const PostHead = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};
  margin-right: 6rem;
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;

const PostContent = styled.div`
  font-size: 1.3125rem;
  color: ${palette.gray[8]};
`;

const PostView = ({ post, error, loading, actionButtons }) => {
  console.log('post:', post);

  // 에러발생시
  if (error) {
    if (error.response && error.response.status === 404) {
      return <PostViewBlock>존재하지 않는 포스트입니다.</PostViewBlock>;
    }
    return <PostViewBlock>오류발생</PostViewBlock>;
  }

  // 로딩중이거나 아직 포스트 데이터가 없을 때
  if (loading || !post) {
    return null;
  }

  const { title, body, user, publishedDate, tags } = post;

  return (
    <PostViewBlock>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <PostHead>
        <h1>{title}</h1>
        <SubInfo
          username={user.username}
          publishedDate={publishedDate}
          hasMarginTop
        />
        <Tags tags={tags} />
      </PostHead>
      {actionButtons}
      <img alt={defaultImg} src={defaultImg} />
      <PostContent dangerouslySetInnerHTML={{ __html: body }} />
    </PostViewBlock>
  );
};

export default PostView;
