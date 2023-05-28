import * as React from "react";
import { IReactChildren } from "../../../../interfaces/IGeneral";

const PublicLayout: React.FC<IReactChildren> = (props) => {
  return <React.Fragment>{props.children}</React.Fragment>;
};

export default PublicLayout;
