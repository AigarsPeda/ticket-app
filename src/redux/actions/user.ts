import { IUserData } from "./../../interfaces/interfaces";
import {
  GET_USER,
  SET_ERROR,
  GET_USER_TICKETS,
  UserActions,
  SetErrorActionTypes,
  TicketActionTypes
} from "./../types";
import { getUserData } from "./../../services/user.services";
import { RootState } from "../reducers";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { ITicket } from "../../interfaces/interfaces";

type AppThunk<ReturnType = any> = ThunkAction<
  ReturnType,
  RootState,
  UserActions | SetErrorActionTypes | TicketActionTypes,
  Action<string>
>;

export const getUser = (): AppThunk => async (dispatch) => {
  try {
    const userData = await getUserData();
    const { user }: { user: IUserData } = userData.data;
    dispatch({
      type: GET_USER,
      payload: user
    });
  } catch (error) {
    console.log("getUser: ", error);
    if (error.response) {
      dispatch({
        type: SET_ERROR,
        payload: error.response.data.message
      });
    }
  }
};

export const getUserTickets = (): AppThunk => async (dispatch) => {
  try {
    const userData = await getUserData();
    const { tickets }: { tickets: ITicket[] } = userData.data.user;
    console.log("Tickets: ", tickets);
    dispatch({
      type: GET_USER_TICKETS,
      payload: tickets
    });
  } catch (error) {
    console.log("getUser: ", error);
    if (error.response) {
      dispatch({
        type: SET_ERROR,
        payload: error.response.data.message
      });
    }
  }
};
