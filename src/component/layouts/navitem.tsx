import { Flex, Text, Box, Tooltip } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { SidebarItemType } from "../../navigation/sidebar";

interface NavItemProps {
  navSize: string;
  active?: boolean;
  sidebar: SidebarItemType;
}
const NavItem = (props: NavItemProps) => {
  const { navSize, active, sidebar } = props;
  return (
    <Tooltip hasArrow label={sidebar.label} isDisabled={navSize !== "small"}>
      <NavLink
        to={sidebar.path}
        style={{
          width: navSize === "small" ? "100%" : "80%",
        }}
      >
        <Box
          p={3}
          borderRadius={8}
          marginTop={30}
          backgroundColor={active ? "#aec8ca" : ""}
          _hover={{
            textDecoration: "none",
            backgroundColor: "#aec8ca",
            color: "black",
          }}
          width={navSize === "small" ? "100%" : "150%"}
          color={active ? "black" : "gray.500"}
        >
          <Flex alignItems="center" w="100%">
            <Box as={sidebar.icon} size={"25px"} />
            <Text ml={5} display={navSize === "small" ? "none" : "block"}>
              {sidebar.label}
            </Text>
          </Flex>
        </Box>
      </NavLink>
    </Tooltip>
  );
};

export default NavItem;
