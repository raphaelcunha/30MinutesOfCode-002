import { IUser } from "~/models/auth";
import api from "~/services/api";

type tTags = {
  id: string;
};

type tAddTag = {
  id: string;
  tags: tTags[];
};

export interface tTag {
  id: string;
  sport: string;
  level: string;
}

export const Tags = async (): Promise<tTag[]> => {
  const { data } = await api.get("/tags");
  return data;
};

export const Tag = async ({ id }: { id: string }): Promise<tTag> => {
  const { data } = await api.get(`/tags/${id}`);
  return data;
};

export const AddTag = async ({ id, tags }: tAddTag): Promise<IUser> => {
  const { data } = await api.post(`/user/tags/${id}`, tags);
  return data;
};
