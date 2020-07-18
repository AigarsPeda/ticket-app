import axios from "axios";

const authToken = (token: string) => {
  if (token) {
    axios.defaults.headers.common["authorization"] = token;
  } else {
    delete axios.defaults.headers.common["authorization"];
  }
};

export default authToken;
