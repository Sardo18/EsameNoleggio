import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
//import Form from 'react-bootstrap/Form';
//import FormControl from 'react-bootstrap/FormControl';
import Nav from 'react-bootstrap/Nav';

const Header = (props) => {

  return(
    <Navbar bg="success" variant="dark" expand="sm" fixed="top">
      <Navbar.Toggle aria-controls="left-sidebar" aria-expanded="false" aria-label="Toggle sidebar" onClick={props.showSidebar}/>
      
      <Navbar.Brand href="index.html">
      AutoNoleggio Sardo
      </Navbar.Brand>
      

      <Nav className="ml-md-auto">
        <Nav.Link href="#">
        <svg className="bi bi-people-circle" width="30" height="30" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 008 15a6.987 6.987 0 005.468-2.63z"/>
            <path fillRule="evenodd" d="M8 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
            <path fillRule="evenodd" d="M8 1a7 7 0 100 14A7 7 0 008 1zM0 8a8 8 0 1116 0A8 8 0 010 8z" clipRule="evenodd"/>
          </svg>
        </Nav.Link>
      </Nav>
    </Navbar>

  );
}

export default Header;
