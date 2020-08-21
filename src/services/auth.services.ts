import axios from "axios";
import { apiEndPoint, configHeader } from "./../Config";
import { IUser } from "../interfaces/interfaces";

const API_ENDPOINT = apiEndPoint();
const config = configHeader();

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
