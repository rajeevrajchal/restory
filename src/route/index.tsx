import { useRoutes } from "react-router-dom";
import useRoutesData from "./routeItem";

const AppRoutes = () => {
  const { routes } = useRoutesData();
  const element = useRoutes(routes);
  return element;
};

export default AppRoutes;
