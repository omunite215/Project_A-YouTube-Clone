import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const Loader = () => {
  return (
    <Backdrop
      sx={(theme) => ({ color: "#000000", zIndex: theme.zIndex.drawer + 1 })}
      open
    >
      <CircularProgress color="primary" size="3.5rem" />
    </Backdrop>
  );
};

export default Loader;
