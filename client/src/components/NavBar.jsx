import React from "react";
import { Navbar, Nav, Container, Image, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { logoutUser } from "../actions/userAction";
const NavBar = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand>
            <Image
              src="https://dcassetcdn.com/design_img/75540/68472/68472_1291526_75540_image.jpg"
              alt="logo"
              style={{ height:200 , width:750}}
            />
            {/* <h1 style={{height:50 , fontFamily:'fantasy' , color:'red'}}>Zomato</h1> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {currentUser ? (
                <LinkContainer to="/">
                  <NavDropdown title={currentUser.name} id="basic-nav-dropdown">
                    <LinkContainer to="/orders">
                      <NavDropdown.Item>orders</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item
                      onClick={() => {
                        dispatch(logoutUser());
                      }}
                    >
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </LinkContainer>
              ) : (
                <>
                  {" "}
                  <LinkContainer to="/login">
                    <Nav.Link><h3>Login</h3></Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/register">
                    <Nav.Link><h3>Register</h3></Nav.Link>
                  </LinkContainer>{" "}
                </>
              )}

              <LinkContainer to="/cart">
                <Nav.Link><h3>Cart {cartState.cartItems.length}</h3></Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
