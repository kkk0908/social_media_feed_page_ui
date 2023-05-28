import { lazy, memo } from "react";
import { IRouteConfig, IKeyValue } from "../interfaces/IRouteConfig";

const routeLink: IKeyValue = {
  Home: "/",
  Login: "/Login",
  SignUp: "/SignUp",
  ForgetPassword: "/ForgetPassword",
  ResetPassword: "/ResetPassword",
  MyProfile: "/MyProfile",
};

const componentType: IKeyValue = {
  LAYOUT: "layout",
};

const ComponentParent: IKeyValue = {
  common: "common",
  pages: "pages",
};

const NonAuthRouteArray: IRouteConfig[] = [
  {
    componentParent: "pages",
    componentPath: "Authentication/Login",
    exact: true,
    isAuthenticated: false,
    path: routeLink.Home,
  },

  {
    componentParent: "pages",
    componentPath: "Authentication/SignUp",
    exact: true,
    isAuthenticated: false,
    path: routeLink.SignUp,
  },
  {
    componentParent: "pages",
    componentPath: "Authentication/ForgetPassword",
    exact: true,
    isAuthenticated: false,
    path: routeLink.ForgetPassword,
  },
  {
    componentParent: "pages",
    componentPath: "Authentication/ResetPassword",
    exact: true,
    isAuthenticated: false,
    path: routeLink.ForgetPassword,
  },
];

const AuthRouteArray: IRouteConfig[] = [
  {
    componentParent: "pages",
    componentPath: "Feeds/Feeds",
    exact: true,
    isAuthenticated: true,
    path: routeLink.Home,
  },

  {
    componentParent: "pages",
    componentPath: "MyProfile/MyProfile",
    exact: true,
    isAuthenticated: true,
    path: routeLink.MyProfile,
  },
];

const routes: IRouteConfig[] = [
  {
    childrens: NonAuthRouteArray,
    componentParent: ComponentParent.common,
    componentPath: "Layout/Public/PublicLayout",
    isAuthenticated: true,
    path: "",
    type: componentType.LAYOUT,
  },
  {
    childrens: AuthRouteArray,
    componentParent: ComponentParent.common,
    componentPath: "Layout/User/UserLayout",
    isAuthenticated: false,
    path: "",
    type: componentType.LAYOUT,
  },
];

const componentCache: { [key: string]: React.ComponentType<any> } = {};

const generateLazyComponent = (r: IRouteConfig) => {
  const { componentParent, componentPath } = r;
  const cacheKey = `${componentParent}/${componentPath || ""}`;

  if (componentCache[cacheKey]) {
    return componentCache[cacheKey];
  }

  const LazyComponent = lazy(() => {
    return Promise.resolve(import(`../components/${componentParent}/${componentPath}.tsx`)).catch(
      (error) => console.log(error.message)
    );
  });

  const MemoizedComponent = memo(LazyComponent);

  componentCache[cacheKey] = MemoizedComponent;
  return MemoizedComponent;
};

export { routes, generateLazyComponent, routeLink };

