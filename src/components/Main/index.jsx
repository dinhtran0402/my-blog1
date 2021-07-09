import { Typography, Grid } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import React from "react";
import Markdown from "markdown-to-jsx";
import { posts } from "../../Data/Data";
const index = ({ title }) => {
  return (
    <Grid >
      <Typography>{title}</Typography>
      <Divider style={{ background: "white" }} />
      {posts.map((post) => (
        <Markdown style={{ textAlign: "left" }} key={post.body}>
          {post.body}
        </Markdown>
      ))}
    </Grid>
  );
};

export default index;
