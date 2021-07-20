import { Button, Card, Grid, makeStyles, Typography } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import React from "react";
import DarkVideo from "../../backgroudDark.mp4";
import { useForm } from "react-hook-form";
const Style = makeStyles(() => ({
  title: {
    fontFamily: "-apple-system",
  },
  line: {
    background: "white",
    marginBottom: "50px",
  },
  product: { padding: "10px" },
}));

const Index = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  const classes = Style();
  return (
    <React.Fragment>
      <video
        autoPlay
        muted
        loop
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100",
          objectFit: "cover",
          transform: "translate(-50%,-50%)",
          zIndex: "-1",
        }}
      >
        <source src={DarkVideo} type="video/mp4" />
      </video>
      <Card style={{ maxWidth: 650, margin: "0 auto", padding: "20px 5px" }}>
        <CardContent>
          <Typography
            className={classes.title}
            variant="h3"
            align="center"
            gutterBottom
          >
            Contact Form
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={6}>
                <TextField
                  name="firstName"
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  {...register("firstName", { required: true, maxLength: 80 })}
                />
                {errors.lastName && (
                  <span style={{ color: "red" }}>First name is required</span>
                )}
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  name="lastName"
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  {...register("lastName", { required: true, maxLength: 80 })}
                />
                {errors.lastName && (
                  <span style={{ color: "red" }}>Last name is required</span>
                )}
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  name="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                {errors.email && (
                  <span style={{ color: "red" }}>Email is required</span>
                )}
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  name="phone"
                  label="Phone"
                  variant="outlined"
                  fullWidth
                  {...register("phone", {
                    required: true,
                    minLength: 6,
                    maxLength: 12,
                  })}
                />
                {errors.phone && (
                  <span style={{ color: "red" }}>Phone is required</span>
                )}
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  name="message"
                  label="Message"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={10}
                  {...register("message", {
                    required: true,
                    maxLength: 10000,
                  })}
                />
                {errors.message && (
                  <span style={{ color: "red" }}>Message is required</span>
                )}
              </Grid>
              <Grid item xs={12} md={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default Index;
