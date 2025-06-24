import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Videos } from "@/components";
import { videoDetailsQueryOptions, videosByIdQueryOptions } from "@/api/video";
import { useSuspenseQuery } from "@tanstack/react-query";

export const Route = createFileRoute("/video/$id")({
  loader: ({ context: { queryClient }, params: { id } }) => {
    const videos = queryClient.ensureQueryData(videosByIdQueryOptions(id));
    const channel = queryClient.ensureQueryData(videoDetailsQueryOptions(id));
    return { videos, channel };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const id = Route.useParams().id;
  const { data: videos } = useSuspenseQuery(videosByIdQueryOptions(id));
  const { data: videoDetail } = useSuspenseQuery(videoDetailsQueryOptions(id));
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#FFF" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#FFF" }}
              py={1}
              px={2}
            >
              <Link
                to="/channel/$id"
                params={{
                  id: channelId,
                }}
              >
                <Typography
                  sx={{ fontSize: { sm: "subtitle1", md: "h6" } }}
                  color="#FFF"
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {likeCount && parseInt(likeCount).toLocaleString() + " likes"}
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
}
