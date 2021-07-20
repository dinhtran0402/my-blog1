import { useAuth0 } from "@auth0/auth0-react";
import {
  Avatar,
  IconButton,
  LinearProgress,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { NavLink } from "react-router-dom";
import LoginButton from "../Auth/LoginButton";
import LogoutButton from "../Auth/LogoutButton";
import DrawerSide from "../DrawerSide/index";
import Profile from "../Profile/index";
import Moon from "../../moon.png";
import Sun from "../../sunny.png";
const Styles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    textAlign: "center",
    fontFamily: "-apple-system",
  },
  link: {
    textDecoration: "none",
    padding: "10px",
    color: "#696969",
  },
  // nav1: {
  //   background: "#FFE4E1",
  // },
}));
export default function Index({ themeMode, lightMode, darkMode }) {
  //SWITCH HEADER
  // const location = useLocation();

  // const [isManagementPage, setIsManagementPage] = React.useState(false);
  // React.useEffect(() => {
  //   location.path === "/Manager"
  //     ? setIsManagementPage(true)
  //     : setIsManagementPage(false);
  // }, [location]);

  const AuthNav = () => {
    const { isAuthenticated } = useAuth0();
    return <>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</>;
  };

  const classes = Styles();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("768"));
  const { isLoading } = useAuth0();
  if (isLoading) return <LinearProgress />;
  return (
    <React.Fragment>
      <AppBar className={classes.nav1}>
        {/* {!isManagementPage ? ( */}
        <Toolbar>
          {isMatch ? (
            <DrawerSide />
          ) : (
            <>
              <NavLink exact to="/my-blog1">
                <Avatar
                  alt="ReySharp"
                  src="https://image.pngaaa.com/930/2507930-middle.png"
                />
              </NavLink>
              <Typography variant="h6" className={classes.title}>
                <NavLink
                  exact
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#4682B4",
                  }}
                  className="linkMenu"
                  to="/my-blog1"
                >
                  Home
                </NavLink>
                <NavLink
                  exact
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#4682B4",
                  }}
                  className="linkMenu"
                  to="/Articles"
                >
                  Article
                </NavLink>
                <NavLink
                  exact
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#4682B4",
                  }}
                  className="linkMenu"
                  to="/Contact"
                >
                  Contact
                </NavLink>
              </Typography>
            </>
          )}

          <div className={isMatch && "float-left"}>
            {themeMode === "dark" ? (
              <IconButton onClick={lightMode}>
                <img className="lightMode" src={Sun} alt="" />
              </IconButton>
            ) : (
              <IconButton onClick={darkMode}>
                <img className="darkMode" src={Moon} alt="" />
              </IconButton>
            )}
            <IconButton>
              <NavLink
                exact
                activeStyle={{
                  fontWeight: "bold",
                  color: "#61dafb",
                }}
                to="/Profile"
              >
                <Profile />
              </NavLink>
            </IconButton>
            <IconButton>{AuthNav()}</IconButton>
          </div>
        </Toolbar>
        {/* ) : null} */}
      </AppBar>
    </React.Fragment>
  );
}
