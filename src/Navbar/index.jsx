import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <div className="bg-primary" fluid>
        <Container>
          <Navbar expand="lg">
                        
            <Navbar.Brand className="text-white" href="#"><h4>SINDONEWS.COM</h4></Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
              <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
              >
                  <Nav.Link className="text-white" href="#action1">Beranda</Nav.Link>
                  <Nav.Link className="text-white" href="#action2">Nasional</Nav.Link>
                  <Nav.Link className="text-white" href="#action3">International</Nav.Link>
                  <Nav.Link className="text-white" href="#action4">Metro</Nav.Link>
                  <Nav.Link className="text-white" href="#action5">Daerah</Nav.Link>
                  <Nav.Link className="text-white" href="#action6">Lifestyle</Nav.Link>
                  <Nav.Link className="text-white" href="#action7">Sport</Nav.Link>
                  <Nav.Link className="text-white" href="#action8">Ekonomi Bisnis</Nav.Link>
                  <Nav.Link className="text-white" href="#action9">Teknologi</Nav.Link>
                                
              </Nav>
              <Form className="d-flex">
                  <Form.Control
                  type="search"
                   placeholder="Cari Berita"
                  className="me-2"
                  aria-label="Search"
                  />
                  <Button variant="outline-light">Cari</Button>
              </Form>
              </Navbar.Collapse>
                        
          </Navbar>
        </Container>
      </div>
  );
}

export default NavBar;