import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import { IconButton, List, ListItemIcon } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
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
          <ListItem>
            <ListItemIcon>
              <ListItemText>
                <Link to="/">Home</Link>
              </ListItemText>
            </ListItemIcon>
          </ListItem>
          <ListItem divider button>
            <ListItemIcon>
              <ListItemText>
                <Link to="./Articles">Article</Link>
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
