import {ADD, GET_SHOWS} from '../actions/actions';

const initialState = {
  shows: [
  //     {
  //   "id": 1,
  //   "name": "Futurama",
  //   "episodes": 72
  // }
  ]
}

const reducer = (state = initialState, action) =>{
  switch(action.type){
    case ADD:
    return {
      ...state,
      shows: [...state.shows, action.item]
    }
    case GET_SHOWS:
    return {
      ...state,
      shows: action.shows
    }
    default:
    return state
  }
}
export default reducer;