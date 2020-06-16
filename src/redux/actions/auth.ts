import { AUTHENTICATE_USER } from "../types";
import { signUpUser, singInUser } from "../../services/auth.services";

import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducers";
import { Action } from "redux";
import { IUser } from "../../interfaces/interfaces";

export const createUser = (
  userData: IUser
): ThunkAction<any, RootState, unknown, Action<string>> => async (dispatch) => {
  try {
    const user = await signUpUser(userData);
    console.log("Created User: ", user);
    const { token } = user.data;
    dispatch({
      type: AUTHENTICATE_USER,
      payload: token,
    });
  } catch (error) {
    if (error.response) {
      console.log("createUser: ", error.response.data);
    }
  }
};

export const loginUser = (
  userData: IUser
): ThunkAction<any, RootState, unknown, Action<string>> => async (dispatch) => {
  try {
    const user = await singInUser(userData);
    console.log("Login User: ", user);
    const { token } = user.data;
    dispatch({
      type: AUTHENTICATE_USER,
      payload: token,
    });
  } catch (error) {
    if (error.response) {
      console.log("createUser: ", error.response.data);
    }
  }
};
