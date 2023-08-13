import axios from "axios";

const baseUrl = axios.create({
  baseURL: "http://pydevazmi.pythonanywhere.com",
});

export default baseUrl;
