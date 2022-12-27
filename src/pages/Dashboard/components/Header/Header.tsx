import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useLogout } from "../../../../common/hooks";

const StyledButton = styled(Button)({
  backgroundColor: "white",
  borderRadius: "30px",
  color: "#000",
  padding: "5px 20px",
  "&:hover": {
    backgroundColor: "white",
  },
});

export default function Header() {
  const logout = useLogout();

  return (
    <Grid
      container
      width="100%"
      bgcolor="#f2f2f2"
      height="90px"
      alignItems="center"
      boxShadow="0px 0px 5px 0px rgba(0,0,0,0.3)"
      padding="0 30px"
      justifyContent="space-between"
    >
      <Grid item bgcolor="#306fda" padding="10px 25px" borderRadius={10}>
        <Grid
          container
          item
          fontSize={25}
          fontWeight="500"
          color="white"
          alignItems="center"
        >
          <Grid item>Piton</Grid>
          <Grid item sx={{ opacity: 0.7 }}>
            Shop
          </Grid>
        </Grid>
      </Grid>
      <Grid>
        <StyledButton variant="text" color="primary" onClick={logout}>
          Logout
        </StyledButton>
      </Grid>
    </Grid>
  );
}
