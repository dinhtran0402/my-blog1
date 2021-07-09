import { Typography } from "@material-ui/core";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  makeStyles,
} from "@material-ui/core";
import React from "react";

const Styles = makeStyles({
  cover: {
    backgroundImage: `url(https://anhdephd.com/wp-content/uploads/2017/07/hinh-nen-thien-nhien-sapa.jpg)`,
    textAlign: "left",
    backgroundPosition: "center",
    padding: "45px 25px",
  },
  title: {
    fontSize: 40,
    fontFamily: "Montserrat",
  },
  textContainer: {
    color: "white",
  },
});

function index() {
  const classes = Styles();
  return (
    <div>
      <Card className={classes.cover}>
        <CardContent className={classes.textContainer}>
          <Typography className={classes.title}>
            Title of a longer featured blog post
          </Typography>
          <Typography variant="h5" component="h2">
            Multiple lines of text that form the lede, informing new readers
            quickly and efficiently about what's most interesting in this post's
            contents.
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="text" style={{ color: "#90caf9", fontWeight: 700 }}>
            Read More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
export default index;
