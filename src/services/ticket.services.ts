import axios from "axios";
import { ITicket } from "../interfaces/interfaces";

const API_ENDPOINT = "http://localhost:5000";
const config = {
  headers: {
    "Content-Type": "application/json"
  }
};

export const addNewTicket = async (ticketData: ITicket) => {
  const response = await axios.post(
    `${API_ENDPOINT}/tickets/add`,
    ticketData,
    config
  );
  return response;
};

export const getAllTickets = async () => {
  const response = await axios.get(`${API_ENDPOINT}/tickets`, config);
  return response;
};

export const editTicket = async (id: string, ticketData: ITicket) => {
  const response = await axios.put(
    `${API_ENDPOINT}/tickets/${id}`,
    ticketData,
    config
  );
  return response;
};

export const deleteTicket = async (id: number) => {
  const response = await axios.delete(`${API_ENDPOINT}/tickets/${id}`, config);
  return response;
};

export const closeTicket = async (id: number) => {
  const response = await axios.put(
    `${API_ENDPOINT}/tickets/mark-ticket/${id}`,
    config
  );
  return response;
};
