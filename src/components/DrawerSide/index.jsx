import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import { Avatar, IconButton, List, ListItemIcon } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink } from "react-router-dom";
const Index = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        anchor="left"
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
      >
        <List>
          {/* <ListItem>
            <ListItemIcon>
              <ListItemText>
                <NavLink style={{ textAlign: "center" }} exact to="/my-blog1">
                  <Avatar
                    alt="ReySharp"
                    src="https://image.pngaaa.com/930/2507930-middle.png"
                  />
                </NavLink>
              </ListItemText>
            </ListItemIcon>
          </ListItem> */}
          <ListItem>
            <ListItemIcon>
              <ListItemText>
                <NavLink
                  exact
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#61dafb",
                  }}
                  className="linkMenu"
                  to="/my-blog1"
                >
                  Home
                </NavLink>
              </ListItemText>
            </ListItemIcon>
          </ListItem>
          <ListItem divider button>
            <ListItemIcon>
              <ListItemText>
                <NavLink
                  exact
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#61dafb",
                  }}
                  className="linkMenu"
                  to="/Articles"
                >
                  Article
                </NavLink>
              </ListItemText>
            </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)} color="default">
        <MenuIcon></MenuIcon>
      </IconButton>
    </>
  );
};

export default Index;
