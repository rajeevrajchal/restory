import { useEffect } from "react";
import { useAppData } from "../../../context/useAppData";
const ResturantDetail = () => {
  
  const {
    activeRoute: { setActiveRoute },
  } = useAppData();

  useEffect(() => {
    setActiveRoute("resturant");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <p>the restaurant detail</p>
    </div>
  );
};

export default ResturantDetail;
