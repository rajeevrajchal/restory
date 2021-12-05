import { Suspense, lazy } from "react";
import type { RouteObject } from "react-router-dom";
import { Navigate, useLocation } from "react-router-dom";
import Splash from "../component/loaders/splash";

import { useAuth } from "../context/useAuth";
const BlankLayout = lazy(() => import("../layouts/BlankLayout"));
const DashboardLayout = lazy(() => import("../layouts/DashboardLayout"));
const Dashboards = lazy(() => import("../views/dashboard"));
const Restaurants = lazy(() => import("../views/resturants"));
const ResturantDetail = lazy(
  () => import("../views/resturants/views/restaurantDetail")
);
const Notification = lazy(() => import("../views/notification"));
const Login = lazy(() => import("../views/auth/login"));
const Register = lazy(() => import("../views/auth/register"));

// error page
const NotFound = lazy(() => import("../views/errors/notfound"));

interface RequireAuthProps {
  children: any;
  isUserLoggedIn: boolean;
  loading: boolean;
  isPublic?: boolean;
  isAuth?: boolean;
  location: any;
}

const RequireAuth = ({
  children,
  isUserLoggedIn,
  isPublic,
  isAuth,
  location,
  loading,
}: RequireAuthProps) => {
  // for route to redirect after checkAuthentication
  const privatePathNavigation: string = location.state
    ? location.state.from
    : "/";

  const publicPathNavigation: string = location.state
    ? location.state.from
    : "/login";

  if (loading && isPublic) {
    return <Splash />;
  }

  // if user is logged in
  if (isUserLoggedIn && isPublic) {
    console.log("entering here");
    return <Navigate to={privatePathNavigation} state={{ from: location }} />;
  }

  if (!isUserLoggedIn && isAuth) {
    console.log("entering here 2");
    return <Navigate to={publicPathNavigation} state={{ from: location }} />;
  }

  return children;
};

const useRoutesData = () => {
  const { isUserLoggedIn, loading } = useAuth();
  const location = useLocation();

  const routes: RouteObject[] = [
    {
      path: "/",
      element: (
        <Suspense fallback={<Splash />}>
          <RequireAuth
            isUserLoggedIn={isUserLoggedIn()}
            location={location}
            loading={loading}
            isPublic={false}
            isAuth={true}
          >
            <DashboardLayout />
          </RequireAuth>
        </Suspense>
      ),
      children: [
        { index: true, element: <Dashboards /> },
        {
          path: "/resturants",
          element: (
            <Suspense fallback={<Splash />}>
              <Restaurants />
            </Suspense>
          ),
        },
        {
          path: "/resturant/:id",
          element: (
            <Suspense fallback={<Splash />}>
              <ResturantDetail />
            </Suspense>
          ),
        },
        {
          path: "/notifications",
          element: (
            <Suspense fallback={<Splash />}>
              {" "}
              <Notification />{" "}
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "/login",
      element: (
        <Suspense fallback={<Splash />}>
          <RequireAuth
            isUserLoggedIn={isUserLoggedIn()}
            location={location}
            loading={loading}
            isPublic={true}
            isAuth={false}
          >
            <BlankLayout />
          </RequireAuth>
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<Splash />}>
              {" "}
              <Login />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "/register",
      element: (
        <Suspense fallback={<Splash />}>
          <RequireAuth
            isUserLoggedIn={isUserLoggedIn()}
            location={location}
            loading={loading}
            isPublic={true}
            isAuth={false}
          >
            <BlankLayout />
          </RequireAuth>
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<Splash />}>
              {" "}
              <Register />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "*",
      element: (
        <Suspense fallback={<Splash />}>
          {" "}
          <NotFound />
        </Suspense>
      ),
    },
  ];
  return {
    routes,
  };
};
export default useRoutesData;
