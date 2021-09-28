import React from 'react';
import styled from 'styled-components';
// import palette from "../../styles/palette";
import { Link } from 'react-router-dom';
// import logo from '../../assets/image/logo.png';

// 회원가입/로그인 페이지의 레이아웃을 담당하는 컴포넌트

// 화면 전체 채움
const AuthTemplateBlock = styled.div`
    position:absolute;
    left:0;
    top:0;
    bottom:0;
    right:0;
    display: flex;
    background: #eee;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

// 흰색박스
const WhiteBox = styled.div`
    .logo-area {
        margin-top: -30px;
        margin-left: 15px;
        border-radius: 10px;
        width: 70%;
        background-color: #6cb2e2;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
        color: white;
        display: block;
        padding: 2.5rem;
        text-align: center;
        font-weight: 600;
        font-size: 1rem;
        letter-spacing: 5px;
    }
    .input-area{
        display:block;
        padding: 2rem;
        text-align: center;
    }
    color: #6cb2e2;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    width: 360px;
    height: 450px;
    background: white;
    border-radius: 10px;
    
`;

// const LogoImg = styled.image`
//     width: 50px;
// `;

const AuthTemplate = ({ children }) => {
    return (
        <AuthTemplateBlock>
            <WhiteBox>
                <div className="logo-area">
                    <Link to="/">React{/*<img className={LogoImg} alt="Logo" src={logo}/>*/}</Link>
                </div>
                <div className="input-area">
                    {children}
                </div>
            </WhiteBox>
        </AuthTemplateBlock>
    );
};

export default AuthTemplate;