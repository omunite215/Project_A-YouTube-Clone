import {
  Outlet,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import { Box } from "@mui/material";
import { Navbar } from "@/components";
import type { QueryClient } from "@tanstack/react-query";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: () => (
    <>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        <Outlet />
      </Box>
    </>
  ),
});
