import axios from "axios";
import { IUser, ITicket } from "../interfaces/interfaces";

const API_ENDPOINT = "http://localhost:5000";
const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const addNewTicket = async (ticket: ITicket) => {};
