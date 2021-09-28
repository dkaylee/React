import React from 'react';
import styled from 'styled-components';

const NavPanel = styled`
  -moz-transform: translatex(20em);
		-webkit-transform: translatex(20em);
		-ms-transform: translatex(20em);
		transform: translatex(20em);
		-moz-transition: -moz-transform 0.2s ease-in-out, visibility 0.2s ease-in-out;
		-webkit-transition: -webkit-transform 0.2s ease-in-out, visibility 0.2s ease-in-out;
		-ms-transition: -ms-transform 0.2s ease-in-out, visibility 0.2s ease-in-out;
		transition: transform 0.2s ease-in-out, visibility 0.2s ease-in-out;
		-webkit-overflow-scrolling: touch;
		visibility: hidden;
		overflow-y: auto;
		position: fixed;
		right: 0;
		top: 0;
		background: #6cb2e2;
		color: #daefe3;
		height: 100%;
		max-width: 80%;
		width: 20em;
		padding: 0.5em 1.25em;
		z-index: 10010;
	}
`;

const NavBar = () => {
  return <nav className="navBar"></nav>;
};

export default NavBar;
