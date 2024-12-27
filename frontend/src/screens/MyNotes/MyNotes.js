import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import { Link } from "react-router-dom";
import { Card, Accordion } from "react-bootstrap";
import axios from "axios"; // Ensure axios is imported

const MyNotes = () => {
  const [notes, setNotes] = useState([]); // Manage notes dynamically
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track errors during fetching

  // Fetch notes from backend
  const fetchNotes = async () => {
    try {
      const { data } = await axios.get("/api/notes"); // Proxy handles localhost:5000
      console.log("Fetched Notes:", data); // Log the data
      if (Array.isArray(data)) {
        setNotes(data); // Update notes state if data is an array
      } else {
        setError("Unexpected response format from the server.");
      }
    } catch (error) {
      setError("Error fetching notes: " + error.message); // Set error message
    } finally {
      setLoading(false); // Set loading to false once done
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      // Add delete logic later
    }
  };

  // Loading or error states
  if (loading) {
    return (
      <MainScreen title="Welcome Back, Shabab...">
        <div>Loading notes...</div>
      </MainScreen>
    );
  }

  if (error) {
    return (
      <MainScreen title="Welcome Back, Shabab...">
        <div>{error}</div>
      </MainScreen>
    );
  }

  return (
    <MainScreen title="Welcome Back, Shabab...">
      <Link to="/createnote" style={{ textDecoration: "none" }}>
        <button type="button" className="btn btn-outline-dark">
          Create Note
        </button>
      </Link>

      <Accordion defaultActiveKey="0">
        {notes.length > 0 ? (
          notes.map((note) => (
            <Card key={note._id} style={{ margin: 10 }}>
              <Accordion.Item eventKey={note._id}>
                <Accordion.Header>{note.title}</Accordion.Header>
                <Accordion.Body>
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
                    </footer>
                  </blockquote>
                </Accordion.Body>
              </Accordion.Item>

              <div className="d-flex justify-content-end p-3">
                <Link
                  to={`/note/${note._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <button
                    type="button"
                    className="btn btn-outline-success me-2"
                  >
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
          ))
        ) : (
          <div>No notes available.</div> // Display message if no notes are found
        )}
      </Accordion>
    </MainScreen>
  );
};

export default MyNotes;
