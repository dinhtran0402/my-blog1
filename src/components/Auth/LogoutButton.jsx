import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@material-ui/core";
import React from "react";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <div>
      <Button onClick={() => logout()}>Log out</Button>
    </div>
  );
};

export default LogoutButton;
