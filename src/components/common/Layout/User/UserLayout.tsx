/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { makeStyles } from "@material-ui/core";

import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import { routeLink } from "../../../../AppRoutes/routeConstant";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between", // Adjust vertical alignment
  },
  appBar: {
    marginBottom: theme.spacing(2),
  },
  logo: {
    flexGrow: 1, // Grow to occupy remaining space
  },

  userIcon: {
    marginLeft: "auto",
  },

  content: {
    flexGrow: 1,
    overflow: "auto",
  },

  footer: {
    display: "flex",
    justifyContent: "space-around !important",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 10,
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    borderTop: `1px solid ${theme.palette.divider}`,
    [theme.breakpoints.down("sm")]: {
      padding: 5,
    },
  },
  footerLink: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textDecoration: "none",
    color: "#666",
    "& i": {
      marginBottom: 5,
    },
    [theme.breakpoints.down("sm")]: {
      flex: 1,
      textAlign: "center",
    },
  },

  centerFooterButtons: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(1),
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      flexBasis: "100%",
      position: "relative",
    },
  },

  centerButton: {
    top: "-55%",
    position: "absolute",

    [theme.breakpoints.down("xs")]: {
      top: "-55%",
      position: "absolute",
    },
  },
}));

const UserLayout: React.FC<any> = ({ children }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.logo}>
            Logo
          </Typography>
          <IconButton className={classes.userIcon}>
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="lg" className={classes.content}>
        {children}
      </Container>

      <BottomNavigation className={classes.footer}>
        <BottomNavigationAction className={classes.footerLink} icon={<HomeIcon />} />
        <BottomNavigationAction className={classes.footerLink} icon={<SearchIcon />} />

        <a href="#" className={classes.footerLink}>
          <Box
            sx={{
              width: 48,
              height: 48,
              bgcolor: "primary.main",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
            className={classes.centerButton}
          >
            <IconButton>
              <AddIcon sx={{ color: "common.white" }} />
            </IconButton>
          </Box>
        </a>

        <BottomNavigationAction className={classes.footerLink} icon={<VideoLibraryIcon />} />
        <BottomNavigationAction
          className={classes.footerLink}
          icon={<AccountCircleIcon />}
          onClick={() => navigate(routeLink.MyProfile)}
        />
      </BottomNavigation>
    </div>
  );
};

export default UserLayout;

