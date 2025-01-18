import axios from "axios";

const userService = {};

userService.register = (data) => {
  return axios.post("http://localhost:5000/user/signup", data);
};

export default userService;
