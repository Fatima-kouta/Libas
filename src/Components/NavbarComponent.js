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
{/* <Navbar bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect>
        <Navbar.Brand>
      
    <div>
    <div className="input-group mb-3">
  <div className="input-group-prepend border-0">
    <span className="input-group-text search-icon " id="basic-addon1">
         <img src={search} alt="search"/>
         </span>
  </div>
          <input type="text"
              className="form-control placholder-search" 
              placeholder="Search by brand, category, item..." 
             aria-label="search" 
              aria-describedby="basic-addon1"
  />
</div>
    </div>
   <div className="logo">

   <img src={LibasLogo} alt="search"/>

   </div>

     
   
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav>
            <NavDropdown title="Products">
              <NavDropdown.Item href="#products/tea">Tea</NavDropdown.Item>
              <NavDropdown.Item href="#products/coffee">Coffee</NavDropdown.Item>
           
            </NavDropdown>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#about-us">About Us</Nav.Link>
            <Nav.Link href="#contact-us">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Navbar> */}
</div>

  );
}

export default NavbarComponent;
