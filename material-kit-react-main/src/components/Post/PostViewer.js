import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer";

const useStyles = makeStyles(styles);

const PostViewer = ({ post, error, loading, actionButtons }) => {
  const classes = useStyles();

  // 에러발생
  if (error) {
    if (error.response && error.response.status === 404) {
      alert("존재하지 않는 포스트 입니다.");
    } else alert("오류발생");
  }

  // 로딩중, 포스트가 없을 때
  if (loading || !post) {
    alert(" ");
  }

  const { title, body, user, publishedDate, tags } = post;

  return (
    <div className={classes.container}>
      <GridContainer>
        <h1>{title}</h1>
        <h6>{user}</h6>
        <div className={classes.typo}>{body}</div>
        <h6>{publishedDate}</h6>
        <h6>{tags}</h6>
      </GridContainer>
    </div>
  );
};

export default PostViewer;
