import Axios, { AxiosInstance } from "axios";
import useNotyf from "./useNotyf";

const axios: AxiosInstance = Axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const notyf = useNotyf();
axios.defaults.timeout = 10000;
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.baseURL = "https://restcountries.eu/rest/v2/";

axios.interceptors.response.use(
  (response) => {
    if (response.status === 200 || response.status === 201) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  (error) => {
    if (!error.response) {
      // network error
      notyf.warning("Error: Network Error");
    } else if (error.response.status) {
      switch (error.response.status) {
        case 400:
          notyf.error(error.response?.data?.title ?? "Something went wrong");
          break;

        case 401:
          notyf.error("401: Unauthorized! Session Expired");
          break;
        case 403:
          notyf.error(error.response?.data?.title ?? "Something went wrong");
          break;
        case 404:
          alert("page not exist");
          break;
        case 500:
          notyf.warning("Error: 500 Internal Server Error");
      }
      return Promise.reject(error.response);
    }
  }
);

export default axios;
