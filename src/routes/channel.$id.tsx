import { createFileRoute } from "@tanstack/react-router";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "@/components";
import { videosByIdQueryOptions } from "@/api/video";
import { feedQueryOptionsByChannel } from "@/api/channel";
import { useSuspenseQuery } from "@tanstack/react-query";

export const Route = createFileRoute("/channel/$id")({
  loader: ({ context: { queryClient }, params: { id } }) => {
    const videos = queryClient.ensureQueryData(videosByIdQueryOptions(id));
    const channel = queryClient.ensureQueryData(feedQueryOptionsByChannel(id));
    return { videos, channel };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const id = Route.useParams().id;
  const { data: videos } = useSuspenseQuery(videosByIdQueryOptions(id));
  const { data: channelDetail } = useSuspenseQuery(
    feedQueryOptionsByChannel(id)
  );
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            backgroundImage:
              "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard
          channelDetail={channelDetail.items[0]}
          marginTop="-110px"
        />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
}
