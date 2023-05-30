/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { makeStyles } from "@material-ui/core";

import Container from "@mui/material/Container";
import Header from "./Header";

const useStyles: any = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between", // Adjust vertical alignment
    width: "100% !important",
    maxWidth: "100% !important",
  },
  content: {
    flexGrow: 1,
    overflow: "auto",
    width: "100% !important",
    maxWidth: "100% !important",
  },
}));

const UserLayout: React.FC<any> = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Container component="main" maxWidth="lg" className={classes.content}>
        {children}
      </Container>
      {/* <Footer /> */}
    </div>
  );
};

export default UserLayout;
