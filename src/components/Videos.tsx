import { Stack, Box } from "@mui/material";

import { ChannelCard, Loader, VideoCard } from "./";
import type { VideosProps } from "@/types/props";

const Videos = ({ videos, direction }: VideosProps) => {
  if (!videos.items.length) return <Loader />;

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {videos.items.map((item, idx) => {
        if (typeof item.id === "string") return;
        return (
          <Box key={idx}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Videos;
