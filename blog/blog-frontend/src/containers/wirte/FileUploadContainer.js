import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FileUpload from '../../commponent/write/FileUpload';
import { changeField } from '../../modules/write';

const FileUploadContainer = () => {
  const dispatch = useDispatch();
  const files = useSelector((state) => state.write.files.name);

  const onChangeFiles = (nextFiles) => {
    dispatch(
      changeField({
        key: 'files',
        value: nextFiles,
      }),
    );
  };
  return <FileUpload onChangeFiles={onChangeFiles} files={files} />;
};

export default FileUploadContainer;
