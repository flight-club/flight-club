import axios from 'axios';

const initialState = {
    loading: false,
    member: [],
    firstName: "",
    loggedIn: false

};

const GET_MEMBER = "GET_MEMBER";
const UPDATE_LOGGEDIN = 'UPDATE_LOGGEDIN'

export function getMember() {
  
  return {

        type: GET_MEMBER,
        payload: axios.get(`/member`).then(err => err)
    };
}

export function setLoggedIn(bool) {
  return {
    type: UPDATE_LOGGEDIN,
    payload: bool
  }
}

export default function reducer(state = initialState, action) {
  
  switch (action.type) {
    case `${GET_MEMBER}_FULFILLED`:
      return {
        ...state,
        loading: false,
        member: action.payload.data
      };
    case `${GET_MEMBER}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case UPDATE_LOGGEDIN:
      return {
        ...state,
        loggedIn: action.payload
      }
    default:
      return state;
  }
}