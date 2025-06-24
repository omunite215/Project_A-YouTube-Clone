import api from "@/api/client";
import type { APIResponse } from "@/types/response";
import { queryOptions } from "@tanstack/react-query";

export class NotFoundError extends Error {}

const fetchChannelDetailById = async (id: string) => {
  console.info("Fetching Channel Info...");
  const { data } = await api.get<APIResponse>("/channels", {
    params: {
      part: "snippet",
      id,
    },
  });
  return data.items[0];
};

export const videosByIdQueryOptions = (id: string) =>
  queryOptions({
    queryKey: ["channel", { id }],
    queryFn: () => fetchChannelDetailById(id),
  });

const fetchFeedDataByChannelId = async (id: string) => {
  console.info("Fetching Feed Info...");
  const { data } = await api.get<APIResponse>("/search", {
    params: {
      channelId: id,
      part: "snippet",
      order: "data",
    },
  });
  return data;
};

export const feedQueryOptionsByChannel = (id: string) =>
  queryOptions({
    queryKey: ["channel/detail", { id }],
    queryFn: () => fetchFeedDataByChannelId(id),
  });
