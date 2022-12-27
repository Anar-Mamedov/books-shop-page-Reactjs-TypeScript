import { styled } from "@mui/material";
import Grid from "@mui/material/Grid";

export const StyledFavorite = styled(Grid)({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  fontSize: "15px",
  "& .MuiSvgIcon-root": {
    fontSize: "25px",
    color: "#CCCCCC",
  },
});

export default {};
