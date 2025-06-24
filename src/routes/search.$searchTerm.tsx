import { Videos } from "@/components";
import { Box, Typography } from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";
import { feedSearchQueryOptions } from "@/api/video";
import { useSuspenseQuery } from "@tanstack/react-query";

export const Route = createFileRoute("/search/$searchTerm")({
  loader: ({ context: { queryClient }, params: { searchTerm } }) =>
    queryClient.ensureQueryData(feedSearchQueryOptions(searchTerm)),
  component: RouteComponent,
});

function RouteComponent() {
  const searchTerm = Route.useParams().searchTerm;
  const { data: videos } = useSuspenseQuery(feedSearchQueryOptions(searchTerm));
  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Results for :&nbsp;
        <span style={{ color: "#FC1503" }}>{searchTerm}</span>videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
}
