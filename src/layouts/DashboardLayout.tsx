import { Flex, Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { LayoutProvider } from "../context/useLayout";
import Sidebar from "../component/layouts/sidebar";
import Header from "../component/layouts/header";

const DashboardLayout = () => {
  return (
    <LayoutProvider>
      <Flex h="100vh" flexDir="row" overflow="hidden">
        <Sidebar />
        <Flex
          flex="1"
          flexDirection="column"
          alignContent="flex-start"
          justifyContent="flex-start"
          padding="8px 30px"
        >
          <Box>
            <Header />
          </Box>
          <Box marginTop="30px" w="100%">
            <Outlet/>
          </Box>
        </Flex>
      </Flex>
    </LayoutProvider>
  );
};

export default DashboardLayout;
