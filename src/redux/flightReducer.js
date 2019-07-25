import axios from 'axios';

const initialState = {
    flight: [],
    loading: false
};

const GET_FLIGHT = "GET_FLIGHT";

export function getFlight() {
    return {
        type: GET_FLIGHT,
        payload: axios.get("/api/flights/:id").then(err => err)
    };
}

export default function flightReducer(state = initialState, action) {
    switch (action.type) {
        case `${GET_FLIGHT}_FULFILLED`:
          return {
            ...state,
            loading: false,
            flight: action.payload.data
          };
    
        case `${GET_FLIGHT}_PENDING`:
          return {
            ...state,
            loading: true
          };
        default:
          return state;
      };
}