import React from "react";
import { Alert } from "react-bootstrap";
const ErrorMessage = ({ variant = "info", children }) => {
  return (
    <Alert variant={variant} style={{ marginTop: "10px" }}>
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <p>{children}</p>
    </Alert>
  );
};

export default ErrorMessage;
