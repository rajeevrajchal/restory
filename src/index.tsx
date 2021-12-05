import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";

// custom providers
import { AuthProvider } from "./context/useAuth";
import { AppDataProvider } from "./context/useAppData";

import App from "./App";
import theme from "./config/theme";

// external css
import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";

ReactDOM.render(
  <BrowserRouter basename="">
    <AuthProvider>
      <AppDataProvider>
        <ChakraProvider>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <ToastContainer />
          <App />
        </ChakraProvider>
      </AppDataProvider>
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
