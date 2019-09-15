import React from "react"
import logo from '../assets/images/me.png'; // Tell Webpack this JS file uses this image
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'

export default ({ children }) => (
	<Navbar bg="dark" expand="lg">
  <Navbar.Brand href="#home">
  <img
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link style={navLinkStyle} href="/about">About</Nav.Link>
      <Nav.Link style={navLinkStyle} href="/pastwork">Past Work</Nav.Link>
      <Nav.Link style={navLinkStyle} href="/contact">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>


/*<div style={headerStyle}>
	  <a href="/" class="logo"><img src={logo} alt="Logo" /></a>
	  <div style={headerRightStyle}>
	    <a style={navLinkStyle} href="/about">About</a>
		<a style={navLinkStyle} href="/pastwork">Past Work</a>
		<a style={navLinkStyle} href="/books">Books</a>
		<a style={navLinkStyle} href="/games">Games</a>
		<a style={navLinkStyle} href="/contact">Contact</a>
	  </div>
	</div>

 <NavDropdown style={navLinkStyle} title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>


	*/



)

const headerStyle = {
	overflow: 'hidden',
  	backgroundColor: 'black',
  	padding: '20px 25px',
  	boxShadow: '1px -7px 2px 6px black',
};

const headerRightStyle = {
	float: 'right',
}

const navLinkStyle = {
	color: 'white',
};