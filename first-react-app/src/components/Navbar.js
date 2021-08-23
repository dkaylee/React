import React from 'react';
import { makeStyles } from '@material-ui/core';
import { List, ListItem } from '@material-ui/core';
import Icon from '@material-ui/core';

import { Link } from 'react-router-dom';

const NavBar = () => {
   return (
    

   <div className="navigation">
        <div className="inner">
            <Link to="/">Home</Link>
            <Link to="/about">학원소개</Link>
            <Link to="/class">수업안내</Link>
            <Link to="/gallery">갤러리</Link>
            <Link to="/map">오시는길</Link>
        </div>
    </div>
    );
};

export default NavBar;