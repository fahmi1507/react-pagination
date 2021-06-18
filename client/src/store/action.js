function setTask(payload) {
  return { type: "SET_TASK", payload };
}

function setLoading(payload) {
  return { type: "SET_LOADING", payload };
}
function setCountries(payload) {
  return { type: "SET_COUNTRIES", payload };
}

function setCovid(payload) {
  return { type: "SET_COVID", payload };
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

export function fetchCovid(input) {
  let url = new URL("https://covid-api.mmediagroup.fr/v1/cases?");
  let params = new URLSearchParams(url.search.slice(1));

  if (!input) {
    input = "Indonesia";
  }

  params.append("country", input);
  console.log(url.href + params.toString());
  return function (dispatch) {
    dispatch(setLoading(true));
    fetch(url.href + params.toString())
      .then((res) => res.json())
      .then((data) => {
        dispatch(setCovid(data));
        dispatch(setLoading(false));
      })
      .catch((err) => console.log(err));
  };
}

export function fetchCountries() {
  return function (dispatch) {
    dispatch(setLoading(true));
    fetch("https://restcountries.eu/rest/v2/region/asia")
      .then((res) => res.json())
      .then((data) => {
        dispatch(setCountries(data));
        dispatch(setLoading(false));
      })
      .catch((err) => console.log(err));
  };
}
