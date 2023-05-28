interface IRouteConfig {
  // index: number;
  // path: string;
  // componentPath: string;
  // exact?: boolean;
  // isAuthenticated: boolean;

  componentParent?: string;
  type?: string;
  path: string;
  componentPath?: string;
  isAuthenticated?: boolean;
  exact?: boolean;
  childrens?: IRouteConfig[];
}

interface IKeyValue {
  [key: string]: string;
}

interface IPrivateRouteProps {
  layout: React.ComponentType<any>;
  component: React.LazyExoticComponent<React.ComponentType<any>>;
}

interface IAppRoute {
  path: string;
  layout: React.ComponentType<any>;
  componentUrl: string;
  isAuthenticated: boolean;
}

export type { IKeyValue, IRouteConfig, IPrivateRouteProps, IAppRoute };
