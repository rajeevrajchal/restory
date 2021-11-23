import React from "react";
import { Box } from "@chakra-ui/react";
interface BlankLayoutProps {
  children: React.ReactNode | JSX.Element | JSX.Element[];
}
const BlankLayout = (props: BlankLayoutProps) => {
  const { children } = props;
  return <Box w="100%">{children}</Box>;
};

export default BlankLayout;
