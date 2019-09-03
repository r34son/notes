import * as types from "./notesActionTypes";

const fetching = () => {
  return {
    type: types.FETCHING
  };
};

const fetch_success = notes => {
  return {
    type: types.FETCH_SUCCESS,
    notes
  };
};

const fetch_failure = error => {
  return {
    type: types.FETCH_FAILURE,
    error
  };
};

export const fetchNotes = token => dispatch => {
  dispatch(fetching());
  return fetch("http://localhost:5000/api/notes", {
    method: "GET",
    headers: {
      auth: token
    }
  })
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json().then(data => dispatch(fetch_success(data))))
    .catch(err => err.json().then(err => dispatch(fetch_failure(err))));
};

const add_success = () => {
  return {
    type: types.ADD_SUCCESS
  };
};

const add_failure = error => {
  return {
    type: types.ADD_FAILURE,
    error
  };
};

export const addNote = (token, title, text) => dispatch => {
  return fetch("http://localhost:5000/api/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      auth: token
    },
    body: JSON.stringify({ title, text })
  })
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res =>
      res
        .json()
        .then(data => {
          console.log("added:", data);
          dispatch(add_success());
        })
        .then(() => dispatch(fetchNotes(token)))
    )
    .catch(err =>
      err.json().then(err => {
        console.log(err);
        dispatch(add_failure());
      })
    );
};

const delete_success = () => {
  return {
    type: types.DELETE_SUCCESS
  };
};

const delete_failure = error => {
  return {
    type: types.DELETE_FAILURE,
    error
  };
};

export const deleteNote = (token, noteId) => dispatch => {
  return fetch(`http://localhost:5000/api/notes/${noteId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      auth: token
    }
  })
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res =>
      res
        .json()
        .then(data => {
          console.log("deleted:", data);
          dispatch(delete_success());
        })
        .then(() => dispatch(fetchNotes(token)))
    )
    .catch(err =>
      err.json().then(err => {
        console.log(err);
        dispatch(delete_failure());
      })
    );
};
