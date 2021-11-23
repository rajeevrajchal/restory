import { lazy } from "react";
import Dashboard from "../views/dashboard";
import Resturants from "../views/resturants";
import Notification from "../views/notification";
import Login from "../views/auth/login";
import Register from "../views/auth/register";

const routeItem = [
  {
    path: "/",
    exact: true,
    component: Dashboard,
  },
  {
    path: "/resturants",
    exact: true,
    component: Resturants,
  },
  {
    path: "/notifications",
    exact: true,
    component: Notification,
  },
  {
    path: "/login",
    exact: true,
    component: Login,
    authNotRequired: true,
  },
  {
    path: "/register",
    exact: true,
    component: Register,
    authNotRequired: true,
  },
];

export default routeItem;
