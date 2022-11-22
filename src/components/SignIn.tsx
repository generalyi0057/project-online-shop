import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";

import { fetchAPI } from "../app/api";

// TODO:
// success: redirect to homepage
// error: show err message

const SignIn = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const signInOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const params = {
      username: data.get("username"),
      password: data.get("password")
    };

    console.log(params);
    
    if(params.username !== "" && params.password !== "") {
      // const instance = fetchDummyAPI("signin", params);

      const instance = fetchAPI("signin", params);
      instance.then(res => {
        console.log("---");
        console.log(res);
      });
    } else {
      // todo: pwd acc should not be empty
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        component="form"
        onSubmit={signInOnSubmit}
        noValidate
        sx={{
          mt: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'primary.dark' }}>
          <PersonIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <TextField name="username" label="Username" sx={{ mt: 4 }} fullWidth />
        <TextField name="password" label="Password" sx={{ mt: 5 }} fullWidth type="password"/>
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 5, mb: 2 }}
          fullWidth
        >
          Sign In
        </Button>
      </Box>
    </Container>
  );
}
export default SignIn;
