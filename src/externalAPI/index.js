import axios from "axios";

const apiKey = "0783ea48b34e4d558c3301f7857cd57b";

axios.defaults.baseURL = "https://news-back.herokuapp.com";

export const getUser = () => {
  return axios.get("/api/user").then(response => response);
};

export const login = data =>
  axios.post("/api/login", data).then(response => response);

export const logout = () =>
  axios.post("/api/logout").then(response => response);

export const refresh = () => {
  const refresh_token = localStorage.getItem("refresh_token");
  return axios
    .post("/api/refresh", null, { headers: { refreshToken: refresh_token } })
    .then(response => response);
};

export const articles = (
  page = 1,
  category = "",
  country = "gb",
  search = ""
) => {
  return axios
    .get("https://newsapi.org/v2/top-headlines", {
      params: {
        country,
        category,
        q: search,
        pageSize: 8,
        page,
        apiKey
      }
    })
    .then(response => response);
};
