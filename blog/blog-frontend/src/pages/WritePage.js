import React from 'react';
import Responsive from '../commponent/common/Responsive';
import Editor from '../commponent/write/Editor';
import TagBox from '../commponent/write/TagBox';

const WritePage = () => {
  return (
    <Responsive>
      <Editor />
      <TagBox />
    </Responsive>
  );
};

export default WritePage;
