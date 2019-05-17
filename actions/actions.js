export const ADD = "ADD";
export const GET_SHOWS = "GET_SHOWS";

import axios from 'axios';

const URL = "https://ammon-fakey.herokuapp.com/shows";

export const fetchShows = () => {
  return dispatch => {
    return axios
    .get(URL)
    .then(response => {
      dispatch(fetchShowsSuccess(response.data))
    })
    .catch(error => {throw error})
  }
}

export const fetchShowsSuccess = shows => (
  {
    type: GET_SHOWS,
    shows: shows
  }
)
export const addItem = (name,episodes) => {
  return dispatch => {
    return axios
    .post(URL, {name,episodes})
    .then(response => {
      dispatch(addItemSuccess(response.data))
    })
    .catch(error => {throw error})
  }
}
export const addItemSuccess = (item) => (
  {
    type: ADD,
    item: item
  }
)