import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';
import Responsive from '../common/Responsive';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

const EditorBlock = styled.div`
  /* 페이지 위아래 여백 지정 */
  padding-bottom: 3rem;
`;

const TitleInput = styled.input`
  font-size: 3rem;
  outline: none;
  padding-bottom: 0, 5rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[4]};
  margin-bottom: 2rem;
  width: 100%;
  color: ${palette.gray[9]};
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

const Editor = ({ title, body, onChangeField }) => {
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

    // quill에 text-change 이벤트 핸들러 등록
    // 참고: https://quilljs.com/docs/api/#events
    // quill.on('text-change', function(delta, oldDelta, source) {
    //   if (source == 'api') {
    //     console.log("An API call triggered this change.");
    //   } else if (source == 'user') {
    //     console.log("A user action triggered this change.");
    //   }
    // });

    const quill = quillInstance.current;
    quill.on('text-change', (delta, oldDelta, source) => {
      if (source === 'user') {
        onChangeField({ key: 'body', value: quill.root.innerHTML });
      }
    });
  }, [onChangeField]);

  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;
    quillInstance.current.root.innerHTML = body;
  }, [body]);

  const onChangeTitle = (e) => {
    onChangeField({ key: 'title', value: e.target.value });
  };

  return (
    <EditorBlock>
      <TitleInput
        placeholder="제목을 입력하세요"
        onChange={onChangeTitle}
        value={title}
      />
      <QuilWrapper>
        <div ref={quillElement} />
      </QuilWrapper>
    </EditorBlock>
  );
};

export default Editor;
