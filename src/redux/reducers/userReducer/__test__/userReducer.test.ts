import { IUserData } from "./../../../../interfaces/interfaces";
import { IUserInitialState } from "../userReducer";
import userReducer from "../userReducer";
import { GET_USER } from "../../../types";

// so that user data won't change in every test case
let user: IUserData;
beforeEach(() => {
  user = {
    date: "2020-07-22T19:09:34.349Z",
    role: "User",
    tickets: [],
    username: "Oskars",
    __v: 0,
    _id: "5f188eeecebc2f159f3445f4"
  };
});

describe("userReducer", () => {
  it("should save user data in state", () => {
    const mockState: IUserInitialState = {
      user: null
    };

    // const mockAction = {
    //   type: GET_USER,
    //   payload: user
    // };

    const state = userReducer(mockState, { type: GET_USER, payload: user });
    expect(state).toEqual(user);
  });

  it("should return default state / unchanged", () => {
    const mockState: IUserInitialState = {
      user: null
    };
    const mockAction = {
      type: "WRONG_ACTION_STRING",
      payload: user
    };
    // @ts-ignore
    const state = userReducer(mockState, mockAction);
    expect(state).toEqual(mockState);
  });
});
