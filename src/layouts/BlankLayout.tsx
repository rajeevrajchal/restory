import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";

const BlankLayout = () => {
  return <Box w="100%"><Outlet/></Box>;
};

export default BlankLayout;
