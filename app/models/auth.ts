import { TTag } from "~/models/tag";

export interface IToken {
  token: string;
  expires: string;
}

export interface IAcessToken {
  access: IToken;
  refresh: IToken;
}

export interface ISignInResponse {
  access_token: IAcessToken;
}

export interface IUser {
  id: string;
  name: string;
  tags: TTag[];
}

export interface IAccount {
  id: string;
  email: string;
  role: string;
  user: IUser;
}
