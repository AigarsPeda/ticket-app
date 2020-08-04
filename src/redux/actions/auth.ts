import { LOGOUT_USER } from "./../types";
import {
  AUTHENTICATE_USER,
  SET_ERROR,
  AuthenticateActionTypes,
  SetErrorActionTypes
} from "../types";
import { signUpUser, singInUser } from "../../services/auth.services";

import authToken from "../../helpers/authToken";

import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducers";
import { Action } from "redux";
import { IUser } from "../../interfaces/interfaces";

// ThunkAction<any, RootState, AuthenticateActionTypes | SetErrorActionTypes, Action<string>>

type AppThunk<ReturnType = any> = ThunkAction<
  ReturnType,
  RootState,
  AuthenticateActionTypes | SetErrorActionTypes,
  Action<string>
>;

export const createUser = (userData: IUser): AppThunk => async (dispatch) => {
  try {
    const user = await signUpUser(userData);
    console.log("Created User: ", user);
    const { token } = user.data;
    authToken(token);
    dispatch({
      type: AUTHENTICATE_USER,
      payload: token
    });
  } catch (error) {
    if (error.response) {
      console.log("createUser: ", error.response.data);
      dispatch({
        type: SET_ERROR,
        payload: error.response.data.message
      });
    }
  }
};

export const loginUser = (userData: IUser): AppThunk => async (dispatch) => {
  try {
    const user = await singInUser(userData);
    console.log("Login User: ", user);
    const { token } = user.data;
    authToken(token);
    dispatch({
      type: AUTHENTICATE_USER,
      payload: token
    });
  } catch (error) {
    if (error.response) {
      console.log("createUser: ", error.response.data);
      dispatch({
        type: SET_ERROR,
        payload: error.response.data.message
      });
    }
  }
};

export const logOutUser = (): AppThunk => (dispatch) => {
  dispatch({
    type: LOGOUT_USER
  });
};
