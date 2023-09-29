
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
export default function NavBar() {
  return (
    <>
      <Navbar  style={{background:'#9BACA5'}} variant="dark">
        <Container>
          <Navbar.Brand href="/" style={{color:'#444970',fontWeight:'bolder'}}>library Management System</Navbar.Brand>
          <Nav className="me-auto">
              <Nav.Link href="/register" style={{color:'black'}} className="nav-links">Student Register</Nav.Link>
              <Nav.Link href="/login" style={{color:'black'}} className="nav-links" >Student Login</Nav.Link>
              <Nav.Link href="/admin" style={{color:'black'}} className="nav-links" >Admin</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      <br />
    </>
  );
}
