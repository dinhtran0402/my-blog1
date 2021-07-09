import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Avatar } from "@material-ui/core";

const Index = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div>
        <Avatar alt={user.name} src={user.picture} />

        {/* {JSON.stringify(user, null, 2)} */}
      </div>
    )
  );
};

export default Index;
