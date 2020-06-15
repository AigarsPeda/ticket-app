import { AUTHENTICATE_USER } from "../types";
import { signUpUser } from "../../services/auth.services";

import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducers";
import { Action } from "redux";

export const createUser = (
  userData: any
): ThunkAction<void, RootState, any, Action<string>> => async (dispatch) => {
  try {
    const user = await signUpUser(userData);
    console.log("User: ", user);
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
