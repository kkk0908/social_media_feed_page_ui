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

const CardComponent: React.FC<any> = (props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  console.log(">>>>>>>>props", props);
  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
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
            </Menu>
          </div>
        }
      />
      <CardContent style={{ position: "relative" }}>
        <ImageSwapper images={props.card.images} />
        {props.card.content}
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
        <IconButton>
          <CommentIcon />
        </IconButton>
        <IconButton>
          <ShareIcon />
        </IconButton>
        <div style={{ flexGrow: 1 }} />

        <IconButton>
          <SaveIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
