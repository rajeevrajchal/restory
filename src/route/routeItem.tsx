import { lazy } from "react";
const routeItem = [
  {
    path: "/",
    exact: true,
    component: lazy(() => import("../views/dashboard")),
    meta: {
      authRoute: true,
    },
  },
  {
    path: "/resturants",
    exact: true,
    component: lazy(() => import("../views/resturants")),
    meta: {
      authRoute: true,
    },
  },
  {
    path: "/notifications",
    exact: true,
    component: lazy(() => import("../views/notification")),
    meta: {
      authRoute: true,
    },
  },
  {
    path: "/login",
    exact: true,
    component: lazy(() => import("../views/auth/login")),
    layout: "BlankLayout",
    meta: {
      publicRoute: true,
    },
  },
  {
    path: "/register",
    exact: true,
    component: lazy(() => import("../views/auth/register")),
    layout: "BlankLayout",
    meta: {
      publicRoute: true,
    },
  },
];

export default routeItem;
