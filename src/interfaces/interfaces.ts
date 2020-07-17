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

export interface ITicket {
  fullname: string;
  email: string;
  subject: string;
  description: string;
  department: string;
  priority: string;
}

export interface IDepartmentAndPriorities {
  id: number;
  title: string;
  key: string;
}
