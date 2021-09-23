import React from 'react';
import Responsive from '../commponent/common/Responsive';
import HeaderContainer from '../containers/common/HeaderContainer';
// import Editor from '../commponent/write/Editor';
// import TagBox from '../commponent/write/TagBox';
// import WriteActionButtons from '../commponent/write/WriteActionButton';
import EditorContainer from '../containers/wirte/EditorContainer';
import TagBoxContainer from '../containers/wirte/TagBoxContainer';
import WriteActionButtonContainer from '../containers/wirte/WriteActionButtonContainer';
import { Helmet } from 'react-helmet-async';
import FileUpload from '../commponent/write/FileUpload';

const WritePage = () => {
  return (
    <>
      <HeaderContainer />
      <Responsive>
        <Helmet>
          <title>글작성하기</title>
        </Helmet>
        <EditorContainer />
        <FileUpload />
        <TagBoxContainer />

        <WriteActionButtonContainer />
      </Responsive>
    </>
  );
};

export default WritePage;
