import axios from "axios";
import jwt_decode from "jwt-decode";
import { GetState, SetState } from "zustand";
import { ISignInResponse, IAccount, IUser } from "~/models/auth";
import { TTag } from "~/models/tag";
import { signUp, signIn, getAccount } from "~/services/auth";
import { AddTag } from "~/services/tags";
import { TGlobalStore } from "~/store";

type tSignIn = {
  email: string;
  password: string;
};

type tSignUpUser = {
  name: string;
};

type tSignUp = {
  email: string;
  password: string;
  user: tSignUpUser;
};
export interface ISignUpResponse {
  id: string;
  email: string;
  role: string;
}

type tTag = {
  id: string;
};

type tAddTags = {
  account: IAccount;
  tags: tTag[];
};

export type TAuthSlice = {
  getAccount: () => void;
  signIn: (data: tSignIn) => Promise<ISignInResponse | undefined>;
  signUp: (data: tSignUp) => Promise<ISignUpResponse | undefined>;
  logout: () => void;
  isAuthenticated: () => boolean;
  account: IAccount | null;
  tags: TTag[];
  addTags: ({ account, tags }: tAddTags) => Promise<IUser>;
};

const createAuthSlice = (
  set: SetState<TGlobalStore>,
  get: GetState<TGlobalStore>
): TAuthSlice => ({
  account: null,
  tags: [],
  getAccount: async () => {
    const token = localStorage.getItem("@coterie:token");
    try {
      if (token) {
        const decode: { sub: string } = jwt_decode(token);

        const account = await getAccount(decode.sub);

        set(
          { account },
          false,
          // @ts-ignore
          "getAccount"
        );

        set(
          { tags: account.user.tags },
          false,
          // @ts-ignore
          "getAccount"
        );

        return account;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) throw error;
    }
  },
  signIn: async ({ email, password }: tSignIn) => {
    try {
      const auth = await signIn(email, password);
      const { access_token } = auth;

      localStorage.setItem("@coterie:token", access_token.access.token);
      localStorage.setItem("@coterie:refresh", access_token.refresh.token);

      return auth;
    } catch (error) {
      if (axios.isAxiosError(error)) throw error;
    }
  },
  signUp: async ({ email, password, user }: tSignUp) => {
    try {
      const account = await signUp(email, password, user);

      return account;
    } catch (error) {
      if (axios.isAxiosError(error)) throw error;
    }
  },
  logout: () => {},
  isAuthenticated: () => {
    const { account, getAccount: getAccountStore } = get();
    if (!account) getAccountStore();
    return !!localStorage.getItem("@coterie:token");
  },
  addTags: async ({ account, tags }: tAddTags) => {
    const newAccount = await AddTag({ id: account.user.id, tags });

    const { getAccount: getAccountStore } = get();

    getAccountStore();

    return newAccount;
  },
});

export default createAuthSlice;
