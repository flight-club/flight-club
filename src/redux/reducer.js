import axios from 'axios';

const initialState = {
    loading: false,
    member: [],
    firstName: ""

};

const GET_MEMBER = "GET_MEMBER";

export function getMember(id) {
    return {
        type: GET_MEMBER,
        payload: axios.get(`/member/${id}`).then(err => err)
    };
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
    default:
      return state;
  }
}