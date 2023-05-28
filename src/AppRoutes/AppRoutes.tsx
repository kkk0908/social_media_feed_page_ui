import React, { Suspense, useEffect, useMemo, useCallback } from "react";
import { BrowserRouter, Route, Routes, Navigate, Outlet } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { generateLazyComponent, routes } from "./routeConstant";
import { IRouteConfig } from "../interfaces/IRouteConfig";

const defaultTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  spacing: (factor: any) => `${0.5 * factor}rem`, // Customize spacing value as needed
});

const AppRoutes: React.FC = () => {
  // useEffect(() => {
  //   const userId = localStorage.getItem("userId");
  //   const shouldRedirect = !userId && window.location.pathname !== "/";

  //   if (shouldRedirect) {
  //     window.location.href = "/";
  //   }
  // }, []);

  const renderRoutes = useCallback((objRoute: IRouteConfig[]) => {
    return objRoute.map((r1) => {
      const { path, childrens } = r1;
      const LazyComponent = generateLazyComponent(r1);
      return (
        <Route key={path} path={path} element={<LazyComponent />}>
          {childrens && renderRoutes(childrens)}
        </Route>
      );
    });
  }, []);

  const curRoute = useMemo(() => routes[localStorage.getItem("userInfo") ? 1 : 0], []);

  const LayoutComponent = generateLazyComponent(curRoute);

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route
              element={
                <LayoutComponent>
                  <Outlet />
                </LayoutComponent>
              }
            >
              {renderRoutes(curRoute.childrens || [])}
            </Route>

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default AppRoutes;

