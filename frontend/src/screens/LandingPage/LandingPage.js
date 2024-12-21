import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to NoteBook</h1>
              <p className="subtitle">A project done for CSE470</p>
              <p>Group08 Fall'24</p>
            </div>
            <div className="buttonContainer">
              <Link to="/login">
                <button type="button" className="btn btn-outline-dark btn-lg">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button type="button" className="btn btn-outline-dark btn-lg">
                  Signup
                </button>
              </Link>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
