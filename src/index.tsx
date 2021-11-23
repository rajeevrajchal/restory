import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import { AuthProvider } from "./context/useAuth";
import { AppDataProvider } from "./context/useAppData";
import App from "./App";
import theme from "./config/theme";

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <AppDataProvider>
        <ChakraProvider>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <App />
        </ChakraProvider>
      </AppDataProvider>
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
