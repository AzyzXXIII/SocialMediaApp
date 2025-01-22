import axios from "axios";

const userService = {};

userService.register = (data) => {
  return axios.post("http://localhost:5000/user/signup", data);
};

userService.login = (data) => {
  return axios.post("http://localhost:5000/user/signin", data);
};

export default userService;
