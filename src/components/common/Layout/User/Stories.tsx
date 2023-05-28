import React from "react";
import { makeStyles } from "@material-ui/core";
import Typography from "@mui/material/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@mui/material/Grid";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    marginRight: theme.spacing(1),
  },
  userStories: {
    display: "flex",
    alignItems: "center",
    marginRight: theme.spacing(2),
  },
}));

const Story: React.FC<any> = ({ image, username, isFirstPost }) => {
  const classes = useStyles();

  return (
    <div>
      <Avatar alt={username} src={image} className={classes.avatar} />
      {isFirstPost && (
        <div>
          <Typography variant="caption" color="textSecondary">
            First Post
          </Typography>
        </div>
      )}
    </div>
  );
};

const Stories: React.FC<any> = ({ image, username, isFirstPost }) => {
  const classes = useStyles();
  return (
    <Grid item className={classes.userStories}>
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
    </Grid>
  );
};

export default Stories;
