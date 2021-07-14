export const REQUEST_DATA = 'REQUEST_DATA';
export const REQUEST_DATA_SUCCESS = 'REQUEST_DATA_SUCCESS';
export const REQUEST_SEARCH = 'REQUEST_SEARCH';
export const ADD_USER_DETAILS = 'ADD_USER_DETAILS';


const requestData = (payload) => ({
  type: REQUEST_DATA,
  payload,
});

const requestDataSuccess = (payload) => ({
  type: REQUEST_DATA_SUCCESS,
  payload,
});

const requestSearch = (payload) => ({
  type: REQUEST_DATA_SUCCESS,
  payload,
});

export const userDetailsAction = (payload) => ({
  type: ADD_USER_DETAILS,
  payload,
})

export const fetchData = (user) => (dispatch) => {
  dispatch(requestData());
  return fetch(`https://api.github.com/search/users?q=${user}&per_page=5`)
    .then((result) => result.json())
    .then((data) => dispatch(requestDataSuccess(data)));
};

export const fetchSearchs = (url) => (dispatch) => {
  dispatch(requestData());
  return fetch(url)
    .then((result) => result.json())
    .then((data) => dispatch(requestSearch(data)));
};
