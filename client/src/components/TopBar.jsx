import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { MdLocalOffer } from "react-icons/md";

const TopBar = () => {
  return (
    <>
      <Navbar style={{background: 'orange'}}>
        <Container fluid>
          <h6 className="text-light" >
            <MdLocalOffer className="text-warning" /> &nbsp;&nbsp; 
            Get you first order with 50% off
          </h6>
          <Nav className="ms-auto">
            <LinkContainer to="/" activeClassName="">
              <Nav.Link><h4>Home</h4></Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about" activeClassName="">
              <Nav.Link><h4>About Us</h4></Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact" activeClassName="">
              <Nav.Link><h4>Contact Us</h4></Nav.Link>
            </LinkContainer>
            <LinkContainer to="/policy" activeClassName="">
              <Nav.Link><h4>terms and policy</h4></Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default TopBar;
