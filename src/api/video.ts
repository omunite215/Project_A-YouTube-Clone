import api from "@/api/client";
import type { APIResponse, APIResponsePrecise } from "@/types/response";
import { queryOptions } from "@tanstack/react-query";

export class NotFoundError extends Error {}

// index
const fetchFeedData = async (category: string = "New") => {
  console.info("Fetching Feed Info...");
  const { data } = await api.get<APIResponse>("/search", {
    params: {
      part: "snippet",
      q: category,
    },
  });
  return data;
};

export const feedQueryOptions = queryOptions({
  queryKey: ["feed"],
  queryFn: () => fetchFeedData(),
});

// search.$searchTerm
export const feedSearchQueryOptions = (term: string) => queryOptions({
  queryKey: ["search", {term}],
  queryFn: () => fetchFeedData(term),
})

// video.$id
const fetchVideosById = async (id: string) => {
  console.info("Fetching Videos of Id: " + id);
  const { data } = await api.get<APIResponse>("/search", {
    params: {
      part: "snippet",
      relatedToVideoId: id,
      type: "video",
    },
  });
  return data;
};

export const videosByIdQueryOptions = (id: string) =>
  queryOptions({
    queryKey: ["feed", { id }],
    queryFn: () => fetchVideosById(id),
  });

const fetchVideoDetailsById = async (id: string) => {
  console.info("Fetching Video Detail of Id: " + id);
  const { data } = await api.get<APIResponsePrecise>("/videos", {
    params: {
      part: "snippet,statistics",
      id,
    },
  });
  return data;
};

export const videoDetailsQueryOptions = (id: string) =>
  queryOptions({
    queryKey: ["video", { id }],
    queryFn: () => fetchVideoDetailsById(id),
  });
