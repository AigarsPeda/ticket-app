import _ from "lodash";
import { AUTHENTICATE_USER } from "../types";

interface IAuthAction {
  type: typeof AUTHENTICATE_USER;
  payload: IAuthInitialState;
}

export interface IAuthInitialState {
  isAuthenticated: boolean;
  token: string;
}

// Initial State
const initialState: IAuthInitialState = {
  isAuthenticated: false,
  token: "",
};

export default (state = initialState, action: IAuthAction) => {
  switch (action.type) {
    case AUTHENTICATE_USER:
      return {
        ...state,
        isAuthenticated: !_.isEmpty(action.payload),
        token: action.payload,
      };

    default:
      return state;
  }
};
