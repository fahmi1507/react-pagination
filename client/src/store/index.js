import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
const intialState = {
  tasks: [],
  loading: false,
};

function reducer(state = intialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "SET_TASK":
      return { ...state, tasks: payload };
    case "SET_LOADING":
      return { ...state, loading: payload };

    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
