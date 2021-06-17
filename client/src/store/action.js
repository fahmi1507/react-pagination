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

  console.log(input, "SELELELELE");
  //Add a second foo parameter.
  params.append("country", input);
  //Query string is now: 'foo=1&bar=2&foo=4'

  // console.log("https://covid-api.mmediagroup.fr/v1/cases?" + params.toString());
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
