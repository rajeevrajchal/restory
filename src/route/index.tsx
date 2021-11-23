import { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useAuth } from "../context/useAuth";

import BlankLayout from "../layouts/BlankLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import routeItem from "./routeItem";

const AppRoutes = () => {
  const { isUserLoggedIn } = useAuth();
  console.log("the user", Boolean(isUserLoggedIn()));
  const Layouts: any = { BlankLayout, DashboardLayout };

  const FinalRoute = (props: any) => {
    const { route } = props;
    if (
      (!Boolean(isUserLoggedIn()) && route.meta === undefined) ||
      (!Boolean(isUserLoggedIn()) &&
        route.meta &&
        !route.meta.authRoute &&
        !route.meta.publicRoute)
    ) {
      return <Redirect to="/login" />;
    }
    if (route.meta && route.meta.authRoute && isUserLoggedIn()) {
      return <Redirect to="/" />;
    }
    return <route.component {...props} />;
  };

  const layoutRoutesAndPath = (layout: any) => {
    const LayoutRoutes: any = [];
    const LayoutPaths: any = [];

    if (routeItem) {
      // eslint-disable-next-line array-callback-return
      routeItem.filter((route): void => {
        if (
          route.layout === layout ||
          (route.layout === undefined && layout === "DashboardLayout")
        ) {
          LayoutRoutes.push(route);
          LayoutPaths.push(route.path);
        }
      });
    }
    return { LayoutRoutes, LayoutPaths };
  };

  const resolveRoutes = () =>
    Object.keys(Layouts).map((layout, index) => {
      const LayoutTag: any = Layouts[layout];
      const { LayoutRoutes, LayoutPaths } = layoutRoutesAndPath(layout);
      const routerProps = {};
      return (
        <Route path={LayoutPaths} key={index}>
          <LayoutTag routerProps={routerProps} layout={layout}>
            <Switch>
              {LayoutRoutes.map((route: any) => {
                return (
                  <Route
                    key={route.path}
                    path={route.path}
                    exact={route.exact === true}
                    render={(props: any) => {
                      Object.assign(routerProps, {
                        ...props,
                        meta: route.meta,
                      });
                      return (
                        <Suspense fallback={null}>
                          <FinalRoute route={route} {...props} />
                        </Suspense>
                      );
                    }}
                  />
                );
              })}
            </Switch>
          </LayoutTag>
        </Route>
      );
    });

  return (
    <Switch>
      {resolveRoutes()}
      {/* NotFound Error page */}
    </Switch>
  );
};

export default AppRoutes;
