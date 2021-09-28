import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';

const FileuploadBlock = styled.div`
  padding: 3rem; 
`;

const ImgPreviewBlock = styled.div`
  margin: 3rem;
`;

const ImgBox = styled.img`
  padding: 2rem;
  height: 200px;
`;

const InputBtn = styled.label`
  padding: 6px 25px;
  background-color: ${palette.cyan[4]};
  border-radius: 4px;
  color: white;
  cursor: pointer;
`;

const FileUpload = () => {
  const [imgBase64, setImageBase64] = useState([]); // 미리보기 파일 base64
  const [imgFile, setImgFile] = useState(''); // 파일

  const handleChangeFile = (e) => {
    console.log('fileinfo', e.target.files);
    setImgFile(e.target.files);
    //fd.append("file", event.target.files)
    setImageBase64([]);
    for (var i = 0; i < e.target.files.length; i++) {
      if (e.target.files[i]) {
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[i]); // 파일을 읽어 버퍼 저장
        // 파일 상태 업데이트
        reader.onloadend = () => {
          // 읽기 완료 후 아래코드 실행
          const base64 = reader.result;
          if (base64) {
            var base64sub = base64.toString();
            setImageBase64((imgBase64) => [...imgBase64, base64sub]);
            // 파일 base64 상태 업데이트
          }
        };
      }
    }
  };

  return (
    <>

      <InputBtn for="file">업로드</InputBtn>
      <input
        type="file"
        id="file"
        onChange={handleChangeFile}
        multiple="multiple"
        style={{ display: 'none' }}
      />
      <ImgPreviewBlock>
        {imgBase64.map((img) => (
          <ImgBox src={img} key={img} />
        ))}
      </ImgPreviewBlock>
    </>
  );
};

export default FileUpload;
