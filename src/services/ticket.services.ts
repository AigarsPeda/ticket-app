import axios from "axios";
import { ITicket } from "../interfaces/interfaces";

const API_ENDPOINT = "http://localhost:5000";
const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const addNewTicket = async (ticketData: ITicket) => {
  const response = await axios.post(
    `${API_ENDPOINT}/tickets/add`,
    ticketData,
    config
  );
  return response;
};
