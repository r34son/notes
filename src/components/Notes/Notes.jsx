import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchNotes, deleteNote } from "../../actions/notesActions";
import Note from "../Note/Note";
import Spinner from "../Spinner/Spinner";
import AddNote from "../AddNote/AddNote";
import "./Notes.css";

const Notes = ({ notes, isFetching, token, fetchNotes, deleteNote }) => {
  useEffect(() => {
    fetchNotes(token);
  }, [fetchNotes, token]);
  return (
    <>
      {isFetching ? (
        <Spinner />
      ) : notes.length === 0 ? (
        <div>no notes</div>
      ) : (
        <div className="notes">
          {notes.map(note => (
            <Note
              key={note._id}
              {...note}
              token={token}
              deleteNote={() => deleteNote(token, note._id)}
            />
          ))}
        </div>
      )}
      <AddNote />
    </>
  );
};

const mapStateToProps = state => {
  return {
    isFetching: state.data.isFetching,
    notes: state.data.notes,
    token: state.auth.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchNotes: token => dispatch(fetchNotes(token)),
    deleteNote: (token, noteId) => {
      dispatch(deleteNote(token, noteId));
      dispatch(fetchNotes(token));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notes);
