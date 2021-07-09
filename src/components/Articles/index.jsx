import React, { useState } from "react";
import {
  Container,
  Divider,
  Grid,
  ListItem,
  makeStyles,
  TextField,
} from "@material-ui/core";
import PostCard from "../PostCard/index";
import Sidebar from "../Sidebar/index";

import JsonData from "../Data/PostCardData.json";
import ReactPaginate from "react-paginate";
import { Typography } from "@material-ui/core";
import { sidebar } from "../Data/Data";
const Style = makeStyles(() => ({
  title: {
    fontFamily: "-apple-system",
    marginTop: "100px",
    marginBottom: "50px",
  },
  line: {
    background: "white",
    marginBottom: "50px",
  },
  product: { padding: "10px" },
}));
const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const classes = Style();
  const [posts] = useState(JsonData.slice(0, 50));
  const [pageNumber, setPageNumber] = useState(0);
  const PostsPerPage = 4;
  const pagesVisited = pageNumber * PostsPerPage;

  const displayPosts = posts
    .filter((prod) => {
      if (searchTerm == "") {
        return prod;
      } else if (prod.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return prod;
      }
    })
    .slice(pagesVisited, pagesVisited + PostsPerPage)
    .map((post) => {
      return (
        <Grid className={classes.product}>
          <PostCard key={post.title} post={post} />
        </Grid>
      );
    });
  const pageCount = Math.ceil(posts.length / PostsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <Container className="wow fadeIn">
      <Typography className={classes.title} font variant="h3">
        Articles
      </Typography>

      <Grid container spacing={5}>
        <Grid item xs={12} md={8}>
          <Divider style={{ background: "white" }} />
          {displayPosts}
        </Grid>
        <Grid item xs={12} md={4}>
          <ListItem>
            <TextField
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
              className="inputSearch"
              id=""
              label="Search Article"
              size="small"
              variant="filled"
              fullWidth
            />
          </ListItem>
          <ListItem>
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </ListItem>
        </Grid>
      </Grid>
      <br />
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </Container>
  );
};

export default Index;
