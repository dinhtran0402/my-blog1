import React from "react";
import {
  Grid,
  CardActionArea,
  Card,
  CardContent,
  Typography,
  Hidden,
  CardMedia,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const Styles = makeStyles({
  card: {
    display: "flex",
    background: "#424242",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  root: {
    maxWidth: 345,
  },
});

const index = ({ post, props }) => {
  function to_slug(str) {
    // Chuyển hết sang chữ thường
    str = str.toLowerCase();

    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, "a");
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, "e");
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, "i");
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, "o");
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, "u");
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, "y");
    str = str.replace(/(đ)/g, "d");

    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, "");

    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, "-");

    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, "");

    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, "");

    // return
    return str;
  }
  const classes = Styles();
  const { id, title } = post;
  return (
    <React.Fragment>
      <CardActionArea>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Link
                to={"Articles-detail/" + id + "/" + to_slug(title) + ".html"}
                style={{
                  fontSize: "20px",
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <Typography variant="h5">{post.title}</Typography>
                <Typography variant="subtitle1">{post.date}</Typography>
                <Typography variant="subtitle1">{post.description}</Typography>
                <Typography variant="subtitle1" style={{ color: "skyblue" }}>
                  Continue reading...
                </Typography>
                <CardMedia
                  className={classes.Ca}
                  image="https://anhdephd.com/wp-content/uploads/2017/07/hinh-nen-thien-nhien-sapa.jpg"
                  title="Contemplative Reptile"
                />
              </Link>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia
              className={classes.cardMedia}
              image={post.image}
              title={post.imageTitle}
            />
          </Hidden>
        </Card>
      </CardActionArea>
    </React.Fragment>
  );
};

export default index;
