import React from "react";
import { Navbar, NavDropdown,   Nav,FormControl,Button,Container,Form } from 'react-bootstrap'
import search from '../assets/images/search.svg'
import LibasLogo from '../assets/images/LibasLogo.svg'
function NavbarComponent() {
  return (
  
    <div>
<Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">
        Navbar scroll

</Navbar.Brand>
<div className="logo">

<img src={LibasLogo} alt="search"/>

</div>
    <Navbar.Toggle aria-controls="navbarScroll" />
    
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
      
        
         
        
      </Nav>
  
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>

</div>

  );
}

export default NavbarComponent;
