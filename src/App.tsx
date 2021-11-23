import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRoutes from "./route";

const App = () => {
  return (
    <>
      <ToastContainer />
      <AppRoutes />
    </>
  );
};

export default App;
