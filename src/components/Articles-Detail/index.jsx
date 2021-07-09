import {
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import PostCardData from "../Data/PostCardData.json";
const Style = makeStyles(() => ({
  root: {
    maxWidth: "auto",
  },
  media: {
    height: 580,
  },
  title: {
    fontFamily: "-apple-system",
    marginTop: "20px",
  },
  line: {
    color: "#FFE4E1",
    fontFamily: "-apple-system",
  },
}));
const index = (props) => {
  var pid = parseInt(props.match.params.id, 10);
  const classes = Style();
  return (
    <Container className="wow fadeIn">
      {PostCardData.map((post, key) => {
        if (post.id === pid) {
          return (
            <div className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography
                    className={classes.title}
                    gutterBottom
                    variant="h2"
                    component="h2"
                  >
                    {post.title}
                  </Typography>
                  <Typography
                    className={classes.line}
                    variant="body2"
                    component="p"
                  >
                    {post.date}
                  </Typography>
                </CardContent>
                <CardMedia
                  className={classes.media}
                  image={post.image}
                  title={post.imageTitle}
                />
                <Typography variant="h3" component="p">
                  {post.description}
                </Typography>
              </CardActionArea>
            </div>
          );
        }
      })}
    </Container>
  );
};

export default index;
