import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';
import Responsive from '../common/Responsive';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

const EditorBlock = styled(Responsive)`
  /* 페이지 위아래 여백 지정 */
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

const TitleInput = styled.input`
  font-size: 3rem;
  outline: none;
  padding-bottom: 0, 5rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[4]};
  margin-bottom: 2rem;
  width: 100%;
  color: ${palette.gray[4]};
`;

const QuilWrapper = styled.div`
  /* 최소크기지정 및 padding 제거 */
  .ql-editor {
    padding: 0;
    min-height: 320px;
    font-size: 1.125rem;
    line-height: 1.5;
  }
  .ql-editor.ql-blank::before {
    left: 0px;
  }
`;

const Editor = () => {
  const quillElement = useRef(null); // Quil를 적용할 DivElement를 설정
  const quillInstance = useRef(null); // Quil 인스턴스를 설정

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: 'snow',
      placeholder: '내용을 입력하세요',
      modules: {
        // 더 많은 옵션
        // https://quilljs.com/docs/modules/toolbar/
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'], // toggled buttons
          ['blockquote', 'code-block', 'link', 'lmage'],
          [{ header: 1 }, { header: 2 }], // custom button values
          [{ color: [] }, { background: [] }], // dropdown with defaults from theme
          [{ font: [] }],
          [{ align: [] }],
        ],
      },
    });
  }, []);

  return (
    <EditorBlock>
      <TitleInput placeholder="제목을 입력하세요" />
      <QuilWrapper>
        <div ref={quillElement} />
      </QuilWrapper>
    </EditorBlock>
  );
};

export default Editor;
