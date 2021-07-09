import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import { borders } from "@material-ui/system";

const useStyles = makeStyles({
  root: {
    maxWidth: 445,

    margin: "auto",
  },
  pictureCard: {
    margin: "auto",
    borderRadius: "50%",
    maxWidth: 405,
    height: 305,
    textAlign: "center",
  },
  social: { margin: "auto" },
});

export default function ImgMediaCard() {
  const classes = useStyles();
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.pictureCard}
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={user.picture}
            title="Contemplative Reptile"
          />
          <CardContent>
            {/* {JSON.stringify(user, null, 2)} */}
            <Typography gutterBottom variant="h5" component="h2">
              Name: {user.nickname}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              Email: {user.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.social}>
          <Button size="small" color="primary">
            <FacebookIcon> </FacebookIcon>
          </Button>
          <Button size="small" color="primary">
            <InstagramIcon></InstagramIcon>
          </Button>
          <Button size="small" color="primary">
            <GitHubIcon></GitHubIcon>
          </Button>
        </CardActions>
      </Card>
    )
  );
}
