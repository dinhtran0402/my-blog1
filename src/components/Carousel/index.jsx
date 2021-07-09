import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Grid, Typography } from "@material-ui/core";
import PostCard from "../PostCard/index";
import JsonData from "../Data/PostCardData.json";

function Index(post) {
  return (
    <Carousel>
      {JsonData.map((post) => (
        <PostCard key={post.title} post={post} />
      ))}
    </Carousel>
  );
}

function Item(post) {
  return (
    <Paper>
      <Typography variant="h5">{post.title}</Typography>
      <Typography variant="subtitle1">{post.date}</Typography>
      <Typography variant="subtitle1">{post.description}</Typography>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}

export default Index;
