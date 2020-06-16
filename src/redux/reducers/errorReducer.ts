import { SET_ERROR, SetErrorActionTypes } from "../types";

// interface IAuthAction {
//   type: typeof AUTHENTICATE_USER;
//   payload: IAuthInitialState;
// }

export interface IErrorInitialState {
  error: string;
}

// Initial State
const initialState: IErrorInitialState = {
  error: "",
};

export default (state = initialState, action: SetErrorActionTypes) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
