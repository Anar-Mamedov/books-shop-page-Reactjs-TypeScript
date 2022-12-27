import LoadingButton from "@mui/lab/LoadingButton";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import styled from "@emotion/styled";
import { grey } from "@mui/material/colors";

export const StyledTextField = styled(TextField)({
  "& .MuiInputBase-root": {
    borderRadius: "30px",
    paddingLeft: "25px",
    paddingRight: "25px",
    height: "55px",
  },
  "& .MuiSvgIcon-root": {
    opacity: 0.5,
  },
});
export const StyledButton = styled(LoadingButton)({
  borderRadius: "30px",
  height: "55px",
});

export const StyledLink = styled("a")({
  fontSize: "14px",
  fontWeight: 300,
  color: grey[700],
  cursor: "pointer",
  "&:hover": {
    color: grey[900],
  },
});

export const StyledFormControlLabel = styled(FormControlLabel)({
  "& .MuiTypography-root": {
    fontWeight: 300,
  },
});
