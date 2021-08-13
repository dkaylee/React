import React from 'react';
import { Link } from 'react-router-dom';
// import "./css/Nav.css";

const Navigation = () => {
   return (
   <div className="navigation">
        <div className="inner">
            <Link to="/">Home</Link>
            <Link to="/introduction">학원소개</Link>
            <Link to="/class">수업안내</Link>
            <Link to="/gallery">갤러리</Link>
            <Link to="/map">오시는길</Link>
        </div>
    </div>
    );
};

export default Navigation;