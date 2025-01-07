import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./RegisterScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../actions/userActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      navigate("/mynotes");
    }
  }, [navigate, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <MainScreen title="REGISTER">
      <div className="form-container">
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loading />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="formName" className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formPassword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formConfirmPassword" className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          <Button
            type="submit"
            variant="dark"
            className="submit-button"
            disabled={loading}
          >
            {loading ? "Loading..." : "Submit"}
          </Button>
        </Form>

        <Row className="py-3 text-center">
          <Col>
            <p>Already have an account?</p>
            <Link to="/login">
              <Button variant="outline-dark" className="submit-button">
                Login Here
              </Button>
            </Link>
          </Col>
        </Row>
      </div>
    </MainScreen>
  );
};

export default RegisterScreen;
