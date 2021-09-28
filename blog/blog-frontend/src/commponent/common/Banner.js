import React from "react";
import styled from "styled-components";
import { FaUserAlt, FaBook, FaLeaf  } from 'react-icons/fa';



const BannerBlock = styled.div`
    padding: 8em 0 8em 0;
    background-color: #ccc;
    background-size: cover;
    background-position: bottom;
    background-attachment: fixed;
    background-repeat: no-repeat;
    text-align: center;
    position: relative;

    .inner {
		position: relative;
		padding-top: 10rem;
    }
    .flex {
		justify-content: center;
		text-align: center;
		margin: 0 2rem 0 2rem;
        display: flex;
    }
    .flex div{
        border-right: 2px solid rgba(255, 255, 255, 0.2);
		padding: 0 3em;
    }
    .flex div:last-child{
        border: none;
		padding-right: 0;
    }
    .flex div:first-child{
        padding-left: 0;
    }
    .flex p{
        font-size: 0.75rem;
		color: rgba(255, 255, 255, 0.55);
    }
    .flex h3{
        font-weight: 400;
		color: #fff;
		margin: 0.5rem 0;
		font-size: 1rem;
    }
    .icon {
        color: #6cb2e2;
	    font-size: 1.5rem;
    }
`;

const Banner = () => {
    return (
        <>
        <BannerBlock>
            <div className="inner">
            <div className="flex">
            <div>
            <FaBook className="icon"/>
			<h3>교육성</h3>
			<p>지각이 아닌 감각을 통한 교육</p>
			</div>

			<div>
            <FaUserAlt className="icon"/>
			<h3>전문성</h3>
			<p>다양한 교육 현장에서의 경험을 통한 전문성</p>
			</div>

			<div>
            
			<FaLeaf className="icon"/>
			<h3>편안함</h3>
			<p>창의성과 공감을 통한 편안함</p>
		    </div>
            </div>
            </div>
        </BannerBlock>
        </>
    );
};

export default Banner;