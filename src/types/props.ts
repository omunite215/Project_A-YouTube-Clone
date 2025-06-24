import type { Dispatch, SetStateAction } from "react";
import type { APIResponse, ID, Items, Snippet } from "./response";

export type ChannelCardProps = {
  channelDetail: Items;
  marginTop?: string;
};

export type VideoCardProps = {
  video: {
    id: ID | string;
    snippet: Snippet;
  };
};

export type SidebarProps = {
  selectedCategory: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
};

export type VideosProps = {
  direction?: "row" | "row-reverse" | "column" | "column-reverse" | undefined;
  videos: APIResponse;
}