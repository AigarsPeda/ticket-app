export interface IUser {
  username: string;
  password: string;
  role?: string;
}

export interface IError {
  usernameError: string;
  passwordError: string;
  roleError?: string;
}
