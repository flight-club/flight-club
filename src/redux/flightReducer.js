import axios from 'axios';

const initialState = {
    results: [],
    loading: false
};

const GET_RESULTS = "GET_RESULTS";

export function getResults() {
    return {
        type: GET_RESULTS,
        payload: axios.get("/results/").then(err => err)
    };
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case `${GET_RESULTS}_FULFILLED`:
          return {
            ...state,
            loading: false,
            results: action.payload.data
          };
    
        case `${GET_RESULTS}_PENDING`:
          return {
            ...state,
            loading: true
          };
        default:
          return state;
      }
}