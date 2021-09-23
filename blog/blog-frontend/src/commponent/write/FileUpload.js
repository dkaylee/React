import React, { useState } from 'react';
import styled from 'styled-components';

const ImgPreviewBlock = styled.div`
  margin-top: 2rem;
`;

const ImgPreviewBox = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  height: 250px;
`;

const FileUpload = () => {
  const [imgBase64, setImageBase64] = useState([]); // 미리보기 파일 base64
  const [imgFile, setImgFile] = useState(''); // 파일

  const handleChangeFile = (e) => {
    console.log(e.target.files);
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
      <input
        type="file"
        id="file"
        onChange={handleChangeFile}
        multiple="multiple"
      />
      <ImgPreviewBlock>
        {imgBase64.map((img) => (
          <ImgPreviewBox src={img} />
        ))}
      </ImgPreviewBlock>
    </>
  );
};

export default FileUpload;
