function setTask(payload) {
  return { type: "SET_TASK", payload };
}

function setLoading(payload) {
  return { type: "SET_LOADING", payload };
}

export function fetchTask() {
  return function (dispatch) {
    dispatch(setLoading(true));
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((tasks) => {
        dispatch(setTask(tasks));
        dispatch(setLoading(false));
      })
      .catch((err) => console.log(err));
  };
}

// export function filterTask(category) {
//   return function (dispatch) {
//     fetch(`https://iam-simulation-02.herokuapp.com/tasks?category=${category}`)
//       .then((res) => res.json())
//       .then((task) => dispatch(setTask(task)));
//   };
// }
