import axios from "axios";
import { IUser } from "../interfaces/interfaces";

const API_ENDPOINT = "http://localhost:500";
const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const signUpUser = async (userData: IUser) => {
  const response = await axios.post(
    `${API_ENDPOINT}/register`,
    userData,
    config
  );
  return response;
};

export const singInUser = async (userData: IUser) => {
  const response = await axios.post(`${API_ENDPOINT}/login`, userData, config);
  return response;
};
