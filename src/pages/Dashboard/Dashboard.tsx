import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

function Dashboard() {
  return (
    <Grid>
      <Header />
      <Outlet />
    </Grid>
  );
}

export default Dashboard;
