export type APIResponse = {
  kind: "youtube#channelListResponse" | "youtube#searchListResponse";
  nextPageToken?: string;
  regionCode?: "US";
  pageInfo: PageInfo;
  items: Items[];
};

export type APIResponsePrecise = {
  snippet: Snippet;
  statistics: Statistics
}

type PageInfo = {
  totalResults: number;
  resultsPerPage: number;
};

export type Items = {
  kind: "youtube#channel" | "youtube#searchResult";
  id: ID | string;
  snippet: Snippet;
  contentDetails: ContentDetails;
  statistics: Statistics;
  brandingSettings: BrandingSettings;
};

export type ID = { kind: string; videoId?: string; channelId?: string };

export type Snippet = {
  title: string;
  description: string;
  channelId: string;
  customUrl: string;
  publishedAt: Date;
  liveBroadcastContent?: "none";
  channelTitle?: string;
  publishTime: Date;
  thumbnails: Thumbnails;
  localized?: {
    title: string;
    description: string;
  };
  country: string;
};

type Thumbnails = {
  default: Default;
  medium: Default;
  high: Default;
};

type Default = {
  url: string;
  width: number;
  height: number;
};

type Statistics = {
  viewCount: string;
  subscriberCount?: string;
  hiddenSubscriberCount: boolean;
  videoCount: string;
  likeCount?: string;
};

type ContentDetails = {
  relatedPlaylists: {
    likes: string;
    uploads: string;
  };
};

type BrandingSettings = {
  channel: {
    title: string;
    description: string;
    keywords: string;
    unsubsribedTrailer: string;
    country: string;
  };
  image: {
    bannerExternalUrl: string;
  };
};
