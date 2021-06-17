let url = new URL("https://covid-api.mmediagroup.fr/v1/cases?");
let params = new URLSearchParams(url.search.slice(1));

//Add a second foo parameter.
params.append("country", "Malaysia");
//Query string is now: 'foo=1&bar=2&foo=4'

// console.log("https://covid-api.mmediagroup.fr/v1/cases?" + params.toString());
console.log(url.href + params.toString());
