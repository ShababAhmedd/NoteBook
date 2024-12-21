import React from "react";
import MainScreen from "../../components/MainScreen";
import { Link } from "react-router-dom";
import { Card, Accordion } from "react-bootstrap";
import notes from "../../notes";

const MyNotes = () => {
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      // Add delete functionality here
    }
  };

  return (
    <MainScreen title="welcome back shabab...">
      <Link to="/createnote" style={{ textDecoration: "none" }}>
        <button type="button" className="btn btn-outline-dark">
          Create Note
        </button>
      </Link>

      <Accordion defaultActiveKey="0">
        {notes.map((note) => (
          <Card key={note._id} style={{ margin: 10 }}>
            <Accordion.Item eventKey={note._id}>
              <Accordion.Header>{note.title}</Accordion.Header>
              <Accordion.Body>
                {/* Replace Badge with button */}
                <button
                  className="btn btn-secondary"
                  style={{ padding: "5px 10px", marginBottom: "10px" }}
                >
                  Category - {note.category}
                </button>
                <blockquote className="blockquote mb-0">
                  <p>{note.content}</p>
                  <footer className="blockquote-footer">
                    <div>
                      Note ID: <cite title="Source Title">{note._id}</cite>
                    </div>
                    <div>
                      Created on:{" "}
                      <cite title="Creation Date">{note.createdOn}</cite>{" "}
                    </div>
                  </footer>
                </blockquote>
              </Accordion.Body>
            </Accordion.Item>

            <div className="d-flex justify-content-end p-3">
              <Link to={`/note/${note._id}`} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-outline-success me-2">
                  Edit
                </button>
              </Link>

              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={() => deleteHandler(note._id)}
              >
                Delete
              </button>
            </div>
          </Card>
        ))}
      </Accordion>
    </MainScreen>
  );
};

export default MyNotes;
