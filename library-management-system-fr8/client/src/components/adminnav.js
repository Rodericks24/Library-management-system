import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function AdminNavbar() {
  return (
    <Navbar  expand="lg"  style={{background:'#9BACA5'}} data-bs-theme="dark" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/welcome" style={{color:'#420264',fontWeight:'bolder'}}>Library Management System</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/createbook" className="nav-link">Add Books</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/" style={{color:'#420264',fontWeight:'bold'}}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
