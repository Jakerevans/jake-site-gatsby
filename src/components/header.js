import React from "react"
import logo from '../assets/images/me.png'; // Tell Webpack this JS file uses this image

export default ({ children }) => (
	<div style={headerStyle}>
	  <a href="/" class="logo"><img src={logo} alt="Logo" /></a>
	  <div style={headerRightStyle}>
	    <a style={navLinkStyle} href="/about">About</a>
		<a style={navLinkStyle} href="/pastwork">Past Work</a>
		<a style={navLinkStyle} href="/books">Books</a>
		<a style={navLinkStyle} href="/games">Games</a>
		<a style={navLinkStyle} href="/contact">Contact</a>
	  </div>
	</div>
)

const headerStyle = {
	overflow: 'hidden',
  	backgroundColor: 'transparent',
  	padding: '20px 25px',
  	boxShadow: '1px -7px 2px 6px black',
};

const headerRightStyle = {
	float: 'right',
}

const logoStyle = {
	display: 'inline-block'
};

const navStyle = {
	padding: '10px',
};

const navLinkStyle = {
	float: 'left',
	color: 'black',
	textAlign: 'center',
	padding: '12px',
	textDecoration: 'none',
	fontSize: '18px',
	lineHeight: '25px',
	borderRadius: '4px',
};