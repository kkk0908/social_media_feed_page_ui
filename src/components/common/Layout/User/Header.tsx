import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { makeStyles } from "@material-ui/core";

const useStyles: any = makeStyles((theme) => ({
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
}));

const Header: React.FC<any> = ({ children }) => {
  const classes = useStyles();
  return (
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
  );
};

export default Header;
