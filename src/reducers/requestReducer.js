import { REQUEST_DATA, REQUEST_DATA_SUCCESS, REQUEST_SEARCH, ADD_USER_DETAILS } from '../actions';

const INITIAL_STATE = {
  users: [],
  dataSearch: [],
  userDetails: []
};

const requestReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_DATA:
    return { ...state };
  case REQUEST_DATA_SUCCESS:
    return { ...state, users: action.payload };
  case REQUEST_SEARCH:
    return { ...state, dataSearch: action.payload };
  case ADD_USER_DETAILS:
    return { ...state, userDetails: action.payload };
  default:
    return state;
  }
};

export default requestReducer;