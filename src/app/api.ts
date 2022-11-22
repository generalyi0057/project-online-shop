// formdata -> request will not change database
// json

import axios from "axios";

// proxy for dev to avoid CORS policy issue
const cors_route = "";
// const cors_route = "https://cors-anywhere.herokuapp.com/";

// API list: www.ecommerceapi.tk
// const URL = "http://www.ecommerceapi.tk:8081/";
const URL = "http://localhost:8082/";

const action_list = {
  signin: {
    path: "login",
    method: "POST",
    param_type: "form-data"
  },
  logout: {
    path: "logout",
    method: "GET",
    param_type: ""
  },
  signup: {
    path: "users",
    method: "POST",
    param_type: "JSON"
  }
};

type Keys = keyof typeof action_list;

interface Parameters {
  username?: FormDataEntryValue | string | null;
  password?: FormDataEntryValue | string | null;
}

export const fetchAPI = async (action: Keys, params: Parameters | object | undefined) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": action_list[action].param_type === "form-data" ? "multipart/form-data" : "application/json"
  };
  const instance = axios({
    method: action_list[action].method,
    url: `${cors_route}${URL}${action_list[action].path}`,
    headers: headers,
    data: params,
    withCredentials: true
  });
  const res = await instance.then();

  return res.data;
}
