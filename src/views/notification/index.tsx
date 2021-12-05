import { useEffect } from "react";
import { useAppData } from "../../context/useAppData";

const Notification = () => {
  const {
    activeRoute: { setActiveRoute },
  } = useAppData();

  useEffect(() => {
    setActiveRoute("notification");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h3>Notifications</h3>
    </div>
  );
};

export default Notification;
