import { TFile } from "~/models/file";
import { TTag } from "~/models/tag";
import { IReaction } from "./reactions";
import { IUser } from "./user";

export type TContentTags = {
  contentId: string;
  tag: TTag;
  tagId: string;
};

export type TContentReaction = {
  contentId: string;
  reaction: {
    id: string;
    reaction: IReaction;
  };
  reactionId: string;
  user: IUser;
  userId: string;
};
export type TCreatedBy = {
  id: string;
  accountId: string;
  fileId: string;
  name: string;
  profession: string;
  createdAt: Date;
  updatedAt: Date;
};

export type TContent = {
  id: string;
  title: string;
  description: string;
  createdById: string;
  richText: string;
  thumbnail: string;
  link: string;
  isHighlighted: boolean;
  file: TFile;
  createdBy: TCreatedBy;
  reactions: TContentReaction[];
  tags: TContentTags[];
  _count: {
    reactions: number;
  };
  embed: {
    html: string;
  };
  createdAt: Date;
  updatedAt: Date;
};
