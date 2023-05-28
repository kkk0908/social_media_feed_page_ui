import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { IListItem } from "../../interfaces/IGeneral";

const ListItem: React.FC<IListItem> = (props) => {
  return (
    <ListItemButton key={props.index}>
      <ListItemIcon>{props.icon}</ListItemIcon>
      <ListItemText primary={props.title} />
    </ListItemButton>
  );
};

export default ListItem;
