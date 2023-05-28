import React, { useEffect, useState } from "react";
import CardComponent from "../../common/CardComponent";
import { Grid } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { getPosts } from "../../../services/post";

const useStyles = makeStyles((theme) => ({
  hiddenOnXSAndSM: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

// const data = [
//   {
//     id: 1,
//     title: "Card 1",
//     images: [
//       "https://via.placeholder.com/500",
//       "https://picsum.photos/500/300",
//       "https://source.unsplash.com/random/500x300",
//     ],
//   },
//   {
//     id: 2,
//     title: "Card 2",
//     images: ["https://loremflickr.com/500/300", "https://placeimg.com/500/300/any"],
//   },
//   {
//     id: 3,
//     title: "Card 3",
//     images: ["https://source.unsplash.com/random/500x300"],
//   },
//   {
//     id: 1,
//     title: "Card 1",
//     images: [
//       "https://via.placeholder.com/500",
//       "https://picsum.photos/500/300",
//       "https://source.unsplash.com/random/500x300",
//     ],
//   },
//   {
//     id: 2,
//     title: "Card 2",
//     images: ["https://loremflickr.com/500/300", "https://placeimg.com/500/300/any"],
//   },
//   {
//     id: 3,
//     title: "Card 3",
//     images: ["https://source.unsplash.com/random/500x300"],
//   },
// ];

const Feeds: React.FC = () => {
  const [datas, setData] = useState([]);
  const classes = useStyles();

  const getAllPosts = () => {
    getPosts()
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <>
      <Grid container spacing={2} style={{ height: "calc(100vh - 4em)" }}>
        <Grid
          item
          xs={12}
          sm={2}
          style={{ borderRight: "1px solid #e2dddd" }}
          className={classes.hiddenOnXSAndSM}
        >
          <div>Grid Item 2 (Hidden on xs and sm)</div>
        </Grid>
        <Grid className="flex" item xs={12} sm={5}>
          <div>
            {datas.map((card, i) => (
              <CardComponent key={i} card={card} />
            ))}
          </div>
        </Grid>
        <Grid item xs={12} sm={4} className={classes.hiddenOnXSAndSM}>
          HI
        </Grid>
      </Grid>
    </>
  );
};

export default Feeds;

