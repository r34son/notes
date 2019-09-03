import * as types from "../actions/notesActionTypes";

const initialState = { isFetching: false, fetchError: null, notes: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCHING:
      return { ...state, isFetching: true };
    case types.FETCH_SUCCESS:
      return { ...state, isFetching: false, notes: action.notes };
    case types.FETCH_FAILURE:
      return { ...state, isFetching: false, fetchError: action.error };
    case types.ADD_FAILURE:
      return { ...state, addError: action.error };
    case types.DELETE_FAILURE:
      return { ...state, deleteError: action.error };
    default:
      return state;
  }
};
