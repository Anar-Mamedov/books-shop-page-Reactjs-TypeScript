import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import PasswordIcon from "@mui/icons-material/LockOutlined";
import { blue } from "@mui/material/colors";
import { Formik } from "formik";
import { useAuth } from "../common/hooks";

import {
  initialValues,
  validationSchema,
} from "../common/hooks/useAuth/useAuth";

import {
  StyledFormControlLabel,
  StyledTextField,
  StyledLink,
  StyledButton,
} from "./styles";

function Auth() {
  const { handleSubmit } = useAuth();

  return (
    <Grid container height="100vh">
      <Grid
        container
        item
        xs={7}
        alignItems="center"
        sx={{
          background: `linear-gradient(${blue[400]},transparent)`,
          bgcolor: blue[900],
        }}
      >
        <Box color="white" ml="150px">
          <Typography fontSize={40} fontWeight={700}>
            PitonShop
          </Typography>
          <Typography fontWeight={500}>
            The most popular book shop for IT
          </Typography>
        </Box>
      </Grid>
      <Grid container item xs={5} justifyContent="center" alignItems="center">
        <Grid
          container
          item
          xs={7}
          direction="column"
          gap={4}
          justifyContent="center"
        >
          <Grid container item direction="column">
            <Typography fontWeight={600} fontSize="22px">
              Hello Again!
            </Typography>
            <Typography fontWeight={300} fontSize={16}>
              Welcome Back
            </Typography>
          </Grid>
          <Formik
            onSubmit={handleSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}
          >
            {({
              handleBlur,
              handleChange,
              isSubmitting,
              handleSubmit: submitForm,
            }) => {
              return (
                <Grid container item direction="column" gap={2}>
                  <Grid item>
                    <StyledTextField
                      name="email"
                      fullWidth
                      placeholder="Email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <EmailIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item>
                    <StyledTextField
                      name="password"
                      fullWidth
                      placeholder="Password"
                      type="password"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PasswordIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid container item justifyContent="flex-end">
                    <StyledFormControlLabel
                      sx={{ fontWeight: 300 }}
                      control={<Checkbox />}
                      label="Remember me"
                      labelPlacement="start"
                    />
                  </Grid>
                  <Grid item>
                    <StyledButton
                      variant="contained"
                      fullWidth
                      disableElevation
                      type="submit"
                      onClick={() => submitForm()}
                      loading={isSubmitting}
                    >
                      Login
                    </StyledButton>
                  </Grid>
                  <Grid item textAlign="center">
                    <StyledLink> Forgot Password </StyledLink>
                  </Grid>
                </Grid>
              );
            }}
          </Formik>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Auth;
