import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
const intialState = {
  tasks: [],
  loading: false,
  covid19Data: { All: { deaths: 0, confirmed: 0, recovered: 0 } },
  countries: [],
};

function reducer(state = intialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "SET_TASK":
      return { ...state, tasks: payload };
    case "SET_LOADING":
      return { ...state, loading: payload };
    case "SET_COVID":
      return { ...state, covid19Data: payload };

    case "SET_COUNTRIES":
      return { ...state, countries: payload };

    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
