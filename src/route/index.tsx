import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/useAuth";

import BlankLayout from "../layouts/BlankLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import routeItem from "./routeItem";

function RequireAuth({ children }: { children: JSX.Element }) {
  const { loggedUser } = useAuth();
  let location = useLocation();

  if (!loggedUser) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}

const AppRoutes = () => {
  const { loggedUser } = useAuth();

  console.log("isUserLoggedIn", loggedUser);

  return (
    <Routes>
      {routeItem.map((route) => {
        const Layout = route.authNotRequired ? BlankLayout : DashboardLayout;
        return route.authNotRequired ? (
          <Route
            path={route.path}
            element={
              <Layout>
                <route.component />
              </Layout>
            }
          />
        ) : (
          <Route
            path={route.path}
            element={
              <RequireAuth>
                <Layout>
                  <route.component />
                </Layout>
              </RequireAuth>
            }
          />
        );
      })}
    </Routes>
  );
};

export default AppRoutes;
