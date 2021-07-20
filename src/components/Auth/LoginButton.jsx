import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@material-ui/core";
import React from "react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <Button style={{ color: "#191970" }} onClick={() => loginWithRedirect()}>
        Login
      </Button>
    </div>
  );
};

export default LoginButton;
