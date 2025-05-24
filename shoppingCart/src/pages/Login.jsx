import React, { useContext } from "react";
import { useNavigate } from "react-router";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
  Container,
  Alert,
} from "@mui/material";
import { AuthContext } from "../contexts/AuthContext";
import { loginRequest } from "../API/authAPI";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const classes = {
  root: {
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  size: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
  },
};

export default function Login(props) {
  const { auth, authDispatch } = useContext(AuthContext);
  const [account, setAccount] = React.useState({ emailId: "", password: "" });
  const [error, setError] = React.useState();

  const navigate = useNavigate();
  const handelAccount = (property, event) => {
    const accountCopy = { ...account };
    accountCopy[property] = event.target.value;

    setAccount(accountCopy);
  };

  const handelLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await loginRequest(account);
      console.log("called");
      authDispatch({ type: "logined", payload: result });
      navigate("/");
    } catch (e) {
      setError("Username or password is not correct.");
      console.log(e);
    }
  };

  return (
    <Container>
      <Grid container sx={{ m: 4 }}>
        <CssBaseline />
        <Grid size={8} sx={{ m: "auto" }}>
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                onChange={(event) => handelAccount("emailId", event)}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="emailId"
                label="Username"
                name="username"
                autoFocus
              />
              <TextField
                onChange={(event) => handelAccount("password", event)}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {error && (
                <>
                  <Alert severity="error">{error}</Alert>
                </>
              )}
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handelLogin}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              {/* <Box mt={5}>
                <Copyright />
              </Box> */}
            </form>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
