import React, { useMemo } from "react";
import List from "@mui/material/List";

import {
  mainListItemsArray,
} from "../../utils/constant";
import ListItem from "./ListItem";

const Sidebar: React.FC = () => {
  const mainListItems = useMemo(() => {
    return mainListItemsArray.map((item) => (
      <ListItem
        index={item.index}
        key={item.index}
        title={item.title}
        icon={item.icon}
      />
    ));
  }, []);

  return <List component="nav">{mainListItems}</List>;
};

export default Sidebar;
