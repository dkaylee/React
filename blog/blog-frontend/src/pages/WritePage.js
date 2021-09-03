import React from 'react';
import Responsive from '../commponent/common/Responsive';
// import Editor from '../commponent/write/Editor';
// import TagBox from '../commponent/write/TagBox';
import WriteActionButtons from '../commponent/write/WriteActionButton';
import EditorContainer from '../containers/wirte/EditorContainer';
import TagBoxContainer from '../containers/wirte/TagBoxContainer';

const WritePage = () => {
  return (
    <Responsive>
      <EditorContainer />
      <TagBoxContainer />
      <WriteActionButtons />
    </Responsive>
  );
};

export default WritePage;
