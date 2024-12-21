import { Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import React from "react";

const Header = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <container>
        <Navbar.Brand href="/">NoteBook</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
            </Form>
          </nav>
          <Nav>
            <Nav.Link href="#home">MyNotes</Nav.Link>
            <NavDropdown title="MashrurSafir" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">MyProfile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </container>
    </Navbar>
  );
};

export default Header;
