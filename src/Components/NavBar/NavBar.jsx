import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../Images/AZ.png";

const Header = () => {
  return (
    <header>
      <Navbar expand="lg" className="bg-white shadow-sm navbar-light">
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img
              src={logo}
              alt="Logo"
              width="50"
              height="50"
              className="d-inline-block align-text-top"
            />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="navbarSupportedContent"
            className="border-0"
          />

          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="ms-auto align-items-center">
              <Nav.Link as={Link} to="/" className="text-dark px-3 active">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="text-dark px-3">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/catalog" className="text-dark px-3">
                Catalog
              </Nav.Link>
              <Nav.Link as={Link} to="/emi" className="text-dark px-3">
                EMI
              </Nav.Link>
              <Nav.Link as={Link} to="/resources" className="text-dark px-3">
                Resources
              </Nav.Link>
              <div className="d-none d-lg-block">
                <Button
                  as={Link}
                  to="/try"
                  variant="primary"
                  className="rounded-pill px-4 py-2 ms-3"
                >
                  Try it
                </Button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
