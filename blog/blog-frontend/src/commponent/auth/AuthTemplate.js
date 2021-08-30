import React from 'react';
import styled from 'styled-components';
// import palette from "../../styles/palette";
import {Link} from 'react-router-dom';

// 회원가입/로그인 페이지의 레이아웃을 담당하는 컴포넌트

// 화면 전체 채움
const AuthTemplateBlock = styled.div`
    position:absolute;
    left:0;
    top:0;
    bottom:0;
    right:0;
    display: flex;
    background: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

// 흰색박스
const WhiteBox = styled.div`
    .logo-area {
        display: block;
        padding-bottom: 2rem;
        text-align: center;
        font-weight: bold;
        letter-spacing: 2px;
    }
    color: white;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.05);
    padding: 2rem;
    width: 360px;
    background: #6cb2e2;
    border-radius: 2px;
`;

const AuthTemplate = ({ children }) => {
    return (
        <AuthTemplateBlock>
            <WhiteBox>
                <div className="logo-area">
                    <Link to="/">Dari Art</Link>
                    {children}
                </div>
            </WhiteBox>
        </AuthTemplateBlock>
    );
};

export default AuthTemplate;