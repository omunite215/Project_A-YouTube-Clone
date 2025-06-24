import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "@tanstack/react-router";
import {
  demoVideoTitle,
  demoVideoUrl,
  demoChannelUrl,
  demoChannelTitle,
} from "@/lib/constants";
import type { VideoCardProps } from "@/types/props";
import { Route as VideoRoute } from "@/routes/video.$id";
import { Route as ChannelRoute } from "@/routes/channel.$id";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}: VideoCardProps) => {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "320px" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link
        to={VideoRoute.to}
        params={{ id: videoId ? videoId : demoVideoUrl }}
      >
        <CardMedia
          component="img"
          image={snippet?.thumbnails.high.url}
          alt={snippet?.title}
          sx={{ width: { xs: "100%", sm: "358px", md: "320px" }, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Link
          to={VideoRoute.to}
          params={{ id: videoId ? videoId : demoVideoUrl }}
        >
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        {snippet ? (
          <Link
            to={ChannelRoute.to}
            params={{
              id: snippet.channelId,
            }}
          >
            <Typography variant="subtitle2" fontWeight="bold" color="gray">
              {snippet.channelTitle}
              <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
            </Typography>
          </Link>
        ) : (
          <a href={demoChannelUrl}>
            <Typography variant="subtitle2" fontWeight="bold" color="gray">
              {demoChannelTitle}
              <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
            </Typography>
          </a>
        )}
      </CardContent>
    </Card>
  );
};

export default VideoCard;
