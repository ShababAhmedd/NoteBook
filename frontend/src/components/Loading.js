import { sanitizeFilter } from "mongoose";
import { spinner } from "react-bootstrap";

const Loading = ({ size = 100 }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        weidth: "100%",
        height: "100%",
      }}
    >
      <spinner
        style={{
          width: size,
          height: size,
        }}
        animation="border"
      />
    </div>
  );
};

export default Loading;
