import { Container, Grid, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { sidebar } from "../Data/Data";
import Main from "../Main/index";
import Post from "../Post/index";
import PostCard from "../PostCard/index";
import Sidebar from "../Sidebar/index";
import JsonData from "../Data/PostCardData.json";

const Styles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));
const Index = (props) => {

  const classes = Styles();
  const [posts] = useState(JsonData.slice(0, 50));
  const [pageNumber, setPageNumber] = useState(0);
  const PostsPerPage = 2;
  const pagesVisited = pageNumber * PostsPerPage;
  const displayPosts = posts
    .slice(pagesVisited, pagesVisited + PostsPerPage)
    .map((post) => {
      return (
        <Grid item md={6}>
          <PostCard pid={post.id} key={post.title} post={post} />
        </Grid>
      );
    });

  const pageCount = Math.ceil(posts.length / PostsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Container className="wow fadeIn">
      <Post></Post>
      <br />
      <Grid container spacing={4}>
        {displayPosts}
      </Grid>
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
      <Grid container spacing={5} className={classes.mainGrid}>
        <Grid item xs={12} md={8}>
          <Main title="From the firehose" />
        </Grid>
        <Grid item xs={12} md={4}>
          <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
            social={sidebar.social}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Index;
