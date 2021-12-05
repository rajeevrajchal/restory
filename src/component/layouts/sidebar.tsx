import { Flex, Heading } from "@chakra-ui/react";
import { map } from "lodash";

import { useLayout } from "../../context/useLayout";
import { useAppData } from "../../context/useAppData";
import NavItem from "./navitem";
import SidebarItems, { SidebarItemType } from "../../navigation/sidebar";

const Sidebar = () => {
  const { navSize } = useLayout();
  const {
    activeRoute: { activeRoute, setActiveRoute },
  } = useAppData();
  return (
    <Flex
      h="100%"
      w={navSize === "large" ? "250px" : "75px"}
      boxShadow="2xl"
      flexDirection="column"
      alignContent="center"
      alignItems={navSize === "large" ? "flex-start" : "center"}
      padding="18px 20px"
      display={{ base: "none", md: "flex" }}
    >
      <Flex alignItems="flex-start" justifyContent="flex-start">
        <Heading
          as="h4"
          size="md"
          display={navSize === "small" ? "none" : "block"}
        >
          ReStory Dashboard
        </Heading>
        <Heading
          as="h4"
          size="md"
          display={navSize === "small" ? "block" : "none"}
        >
          ReS
        </Heading>
      </Flex>
      <Flex
        marginTop="20px"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        {map(SidebarItems, (sidebar: SidebarItemType) => (
          <NavItem
            navSize={navSize}
            sidebar={sidebar}
            key={sidebar.label}
            active={activeRoute === sidebar.activeRoute}
            setActiveRoute={setActiveRoute}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default Sidebar;
