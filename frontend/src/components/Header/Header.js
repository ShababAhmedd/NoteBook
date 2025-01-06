import { Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css"; // Import the CSS file

const Header = () => {
  const navigate = useNavigate(); // Replaced useHistory with useNavigate
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <div className="navbar-container">
        {/* Left Aligned Section */}
        <div className="navbar-left">
          <Navbar.Brand>
            <Link to="/" className="custom-link">
              NoteBook
            </Link>
          </Navbar.Brand>
          <Nav>
            <Nav.Link>
              <Link to="/mynotes" className="custom-link">
                MyNotes
              </Link>
            </Nav.Link>
          </Nav>
        </div>

        {/* Right Aligned Search Bar */}
        <div className="navbar-right">
          <Form>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form>
        </div>

        {/* Dropdown */}
        <Nav>
          <NavDropdown title="MashrurSafir" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">MyProfile</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              onClick={() => {
                localStorage.removeItem("userInfo");
                navigate("/login"); // Replaced history.push with navigate
              }}
            >
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </div>
    </Navbar>
  );
};

export default Header;
