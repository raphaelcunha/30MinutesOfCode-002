import { ISignInResponse, IAccount } from "models/auth";
import api from "~/services/api";

type tSignUp = {
  name: string;
  profession?: string;
};

export const signIn = async (
  email: string,
  password: string
): Promise<ISignInResponse> => {
  const { data } = await api.post("/auth/login", { email, password });
  return data;
};

export const signUp = async (
  email: string,
  password: string,
  user: tSignUp
): Promise<IAccount> => {
  const { data } = await api.post("/account", {
    email,
    password,
    user,
  });
  return data;
};

export const getAccount = async (id: string): Promise<IAccount> => {
  const { data } = await api.get(`/account/${id}`);
  return data;
};
