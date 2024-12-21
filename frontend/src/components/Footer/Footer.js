import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        position: "relative",
        bottom: 0,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <container>
        <Row>
          <Col className="text-center py-3">
            Copyright &copy; NoteBook_Group08_CSE470_Fall'24
          </Col>
        </Row>
      </container>
    </footer>
  );
};

export default Footer;
