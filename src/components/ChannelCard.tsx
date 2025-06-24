import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "@tanstack/react-router";
import { demoProfilePicture } from "@/lib/constants";
import type { ChannelCardProps } from "@/types/props";

const ChannelCard = ({ channelDetail, marginTop }: ChannelCardProps) => {
  if (typeof channelDetail.id === "string" || !channelDetail.id.channelId) {
    return;
  }
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "356px", md: "320px" },
        height: "326px",
        margin: "auto",
        marginTop,
      }}
    >
      <Link to="/channel/$id" params={{ id: channelDetail.id.channelId }}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#FFF",
          }}
        >
          <CardMedia
            component="img"
            image={
              channelDetail.snippet.thumbnails.high?.url || demoProfilePicture
            }
            alt={channelDetail.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              border: "1px solid #E3E3E3",
            }}
          />
          <Typography variant="h6">
            {channelDetail.snippet.title}
            <CheckCircle sx={{ fontSize: 14, color: "gray", ml: "5px" }} />
          </Typography>
          {channelDetail.statistics?.subscriberCount && (
            <Typography>
              {channelDetail.statistics.subscriberCount}&nbsp;Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
