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
  // fullName: string;
  // email: string;
  // subject: string;
  // description: string;
  // department: string;
  // priority: string;
  // created?: Date;
  // dueDate?: Date;
  // status?: "Open" | "Close";
  // tickedId?: string;
  // _id?: string;
  closed?: boolean;
  created?: Date;
  department: string;
  description: string;
  dueDate?: Date;
  email: string;
  fullName: string;
  priority: string;
  status?: "Open" | "Close";
  subject: string;
  tickedId?: string;
  user?: string;
  __v?: number;
  _id?: string;
}

export interface IUserData {
  date: string;
  role: string;
  tickets: ITicket[];
  username: String;
  __v: number;
  _id: string;
}

export interface IDepartmentAndPriorities {
  id: number;
  title: string;
  key: string;
}
