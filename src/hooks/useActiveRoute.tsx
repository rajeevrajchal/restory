import { useState } from "react";

const useActiveRoute = () => {
  const [activeRoute, setActiveRoute] = useState<string>("home");

  return {
    activeRoute,
    setActiveRoute,
  };
};

export default useActiveRoute;
