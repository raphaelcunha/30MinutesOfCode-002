import { TContent } from "models/content";
import { TTag } from "models/tag";
import api from "~/services/api";

type tTags = {
  tags: TTag[];
};

type tId = {
  id: string;
};

interface IPostContentReaction {
  contentId: string;
  reaction: string;
}

interface IDeleteContentReaction {
  contentId: string;
  reactionId: string;
}

export const getContents = async (): Promise<TContent[]> => {
  const { data } = await api.get<TContent[]>("/content");
  return data;
};

export const getContent = async ({ id }: tId): Promise<TContent> => {
  const { data } = await api.get<TContent>(`/content/${id}`);
  return data;
};

export const getContentsByTags = async ({
  tags,
}: tTags): Promise<TContent[]> => {
  const tagsParams = JSON.stringify(tags);

  const { data } = await api.get<TContent[]>(`/content/tags/${tagsParams}`);
  return data;
};

export const getContentId = async (id: string) => {
  const { data } = await api.get<TContent>(`/content/${id}`);
  return data;
};

export const getContentForMe = async () => {
  const { data } = await api.get<TContent[]>("/content/me");
  return data;
};

export const postContentReaction = async ({
  contentId,
  reaction,
}: IPostContentReaction) => {
  const { data } = await api.post(`/content/${contentId}/reaction`, {
    reaction,
  });
  return data;
};

export const deleteContentReaction = async ({
  contentId,
  reactionId,
}: IDeleteContentReaction) => {
  const { data } = await api.delete(
    `/content/${contentId}/reaction/${reactionId}`
  );
  return data;
};
