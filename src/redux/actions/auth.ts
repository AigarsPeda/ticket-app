import { AUTHENTICATE_USER } from "../types";
import { signUpUser } from "../../services/auth.services";

import { ThunkDispatch } from "redux-thunk";

export const createUser = (userData: any) => async (
  dispatch: ThunkDispatch<{}, {}, any>
) => {
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
