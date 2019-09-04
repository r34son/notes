import React, { useState } from "react";
import { connect } from "react-redux";
import "./AddNote.css";
import { addNote, fetchNotes } from "../../actions/notesActions";

const AddNote = ({ error, token, onAdd, fetchNotes }) => {
  const [add, setAdd] = useState(false);
  const [title, setTitle] = useState();
  const [text, setText] = useState();

  const resetFields = () => {
    setText("");
    setTitle("");
  };

  const onSubmit = e => {
    e.preventDefault();
    onAdd(token, title, text);
    setAdd(false);
    resetFields();
  };
  return (
    <>
      <div className="add-note" onClick={() => setAdd(true)}>
        <i className="fas fa-plus"></i>
      </div>
      {add && (
        <div className="modal">
          <div className="new-note">
            <div
              className="close"
              onClick={() => {
                setAdd(false);
                resetFields();
              }}
            >
              <i className="far fa-times-circle"></i>
            </div>
            <form className="new-note-form" onSubmit={onSubmit}>
              <label className="label" htmlFor="newtitle">
                Note title
              </label>
              <textarea
                id="newtitle"
                maxLength="20"
                placeholder="title"
                value={title}
                required
                onChange={e => setTitle(e.target.value)}
              ></textarea>
              <hr />
              <label className="label" htmlFor="newtext">
                Note text
              </label>
              <textarea
                id="newtext"
                placeholder="text"
                value={text}
                required
                onChange={e => setText(e.target.value)}
                onKeyDown={e => {
                  e.target.style.cssText = "height:auto;";
                  e.target.style.height = e.target.scrollHeight + "px";
                }}
              ></textarea>
              <button type="submit" className="new-note-btn">
                <i className="fas fa-plus"></i>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    error: state.data.addError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAdd: (token, title, text) => dispatch(addNote(token, title, text))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNote);
