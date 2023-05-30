import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import SaveIcon from "@mui/icons-material/Save";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ImageSwapper from "./ImageSwapper";
import { FacebookShareButton, TwitterShareButton } from "react-share";

const CardComponent: React.FC<any> = (props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  console.log(">>>>>>>>props", props);
  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (id: string, type: string) => {
    props.parentFunction(id, type);
  };

  const handleDeletePost = (id: string) => {
    props.deletePost(id);
  };

  return (
    <Card className="flex-item">
      <CardHeader
        title={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span style={{ marginRight: "8px" }}>{props.card.title || "Admin"}</span>
            <IconButton onClick={handleMenuClick}>
              <MoreVertIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
              <MenuItem onClick={handleMenuClose}>Download</MenuItem>
              <MenuItem onClick={handleMenuClose}>Edit</MenuItem>
              <MenuItem onClick={() => handleDeletePost(props.card._id)}>X</MenuItem>
            </Menu>
          </div>
        }
      />
      <CardContent style={{ position: "relative" }}>
        <ImageSwapper images={props.card.images} />
        {props.card.content}
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={() => handleClick(props.card._id, "like")}>
          <FavoriteIcon />
          <span> {props.card.likesCount}</span>
        </IconButton>
        <IconButton>
          <CommentIcon />
        </IconButton>
        <IconButton onClick={() => handleClick(props.card._id, "share")}>
          <FacebookShareButton
            url={"https://www.linkedin.com/feed/update/urn:li:share:7068814009013084160/"}
          >
            {props.card.shareCount}
            <ShareIcon />
          </FacebookShareButton>
        </IconButton>
        <div style={{ flexGrow: 1 }} />

        <IconButton onClick={() => handleClick(props.card._id, "save")}>
          <SaveIcon />
          <span> {props.card.saveCount}</span>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CardComponent;

