import axios from "axios";

const API_URL = "http://localhost:8000/accounts/api/";

const registerForPatient = (username, email, password1,password2,first_name,last_name,country,gender,Phone_number) => {
    const data = {
        username: username,
        email: email,
        password1: password1,
        password2: password2,
        first_name: first_name,
        last_name: last_name,
        country: country,
        gender: gender,
        Phone_number: Phone_number,
      }
  return axios.post(API_URL + "patient-register/", data);
};
const registerForDoctor = (formData) => {
  return axios.post(API_URL + "doctor-register/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
    };
console.log(API_URL + "login/")
const login = (username, password) => {
    const data = {
        username: username,
        password: password,
      }
  return axios
    .post(API_URL + "login/", data)
    .then((response) => {
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  return axios.post(API_URL + "logout").then((response) => {
    return response.data;
  });
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
registerForPatient,
  login,
  logout,
  getCurrentUser,
  registerForDoctor
}

export default AuthService;