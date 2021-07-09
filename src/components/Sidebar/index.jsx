import { Grid, Link, Typography, makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import React from "react";
const Styles = makeStyles((theme) => ({
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
  },
}));
const index = (props) => {
  const classes = Styles();
  const { title, description, social } = props;
  return (
    <Grid>
        <Paper elevation={0} className={classes.sidebarAboutBox}>
          <Typography>{title}</Typography>
          <Typography>{description}</Typography>
        </Paper>

      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Social
      </Typography>
      {social.map((network) => (
        <Link display="block" variant="body1" href="#" key={network.name}>
          <Grid container direction="row" spacing={1} alignItems="center">
            <Grid item>
              <network.icon />
            </Grid>
            <Grid item>{network.name}</Grid>
          </Grid>
        </Link>
      ))}
    </Grid>
  );
};

export default index;
