const URL = "https://swapi.dev/api/people/?format=json&page=";

let configGet = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
  url: "",
};

export const getPeople = async (params) => {
  configGet.url = URL + params;
  //console.log(URL + params, configGet);
  return await fetch(URL + params)
    .then((resp) => resp.json())
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error;
    });
};
