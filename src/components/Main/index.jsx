import { Grid, Typography } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Markdown from "markdown-to-jsx";
import React from "react";
import { posts } from "../../Data/Data";

const Index = ({ title }) => {
  return (
    <Grid>
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

export default Index;
