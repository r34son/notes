import React, { useState, useEffect, useRef } from "react";
import "./Note.css";

const Note = ({
  _id,
  title: stateTitle,
  text: stateText,
  deleteNote,
  token
}) => {
  const [title, setTitle] = useState(stateTitle);
  const [text, setText] = useState(stateText);
  const [editTitle, setEditTitle] = useState(false);
  const [editText, setEditText] = useState(false);

  const tarea = useRef(null);

  useEffect(() => {
    tarea.current.style.height = "auto";
    tarea.current.style.height = `${tarea.current.scrollHeight + 15}px`;
  }, [text]);

  const save = (name, value) => {
    fetch(`http://localhost:5000/api/notes/${name}/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        auth: token
      },
      body: JSON.stringify({ [name]: value })
    })
      .then(res => (res.ok ? res : Promise.reject(res)))
      .then(res => res.json().then(data => console.log(data)))
      .catch(err => err.json().then(err => console.log(err)));
  };

  return (
    <div className="note">
      <div className="note-title-container">
        <textarea
          id="title"
          readOnly={!editTitle}
          maxLength="20"
          placeholder="Note title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        ></textarea>
        <label
          className="title-edit"
          htmlFor="title"
          onClick={() => {
            if (editTitle) save("title", title);
            setEditTitle(!editTitle);
          }}
        >
          {!editTitle ? (
            <i className="fas fa-pencil-alt"></i>
          ) : (
            <i className="far fa-save"></i>
          )}
        </label>
      </div>
      <div className="note-text-container">
        <textarea
          id="text"
          readOnly={!editText}
          placeholder="Note text"
          value={text}
          ref={tarea}
          onChange={e => {
            setText(e.target.value);
          }}
        ></textarea>
        <label
          className="text-edit"
          htmlFor="text"
          onClick={() => {
            if (editText) save("text", text);
            setEditText(!editText);
          }}
        >
          {!editText ? (
            <i className="fas fa-pencil-alt"></i>
          ) : (
            <i className="far fa-save"></i>
          )}
        </label>
      </div>
      <div className="delete" onClick={deleteNote}>
        <i className="far fa-trash-alt"></i>
      </div>
    </div>
  );
};

export default Note;
