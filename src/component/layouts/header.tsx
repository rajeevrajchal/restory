import { Box, Flex, useColorMode } from "@chakra-ui/react";
import { BsSun, BsMoon } from "react-icons/bs";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import Account from "./account";
import { useLayout } from "../../context/useLayout";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { navSize, handleNavChange } = useLayout();
  return (
    <Flex
      w="100%"
      h="8vh"
      justifyContent="space-between"
      alignContent="center"
      alignItems="center"
      boxShadow="base"
      borderRadius="lg"
    >
      <Box>
        <Box
          ml="30px"
          as={navSize === "large" ? AiOutlineMenuFold : AiOutlineMenuUnfold}
          size={"25px"}
          cursor="pointer"
          onClick={handleNavChange}
          display={{ base: "none", md: "block" }}
        />

        <Box
          ml="30px"
          as={GiHamburgerMenu}
          size={"25px"}
          cursor="pointer"
          display={{ base: "block", md: "none" }}
        />
      </Box>
      <Flex alignContent="center" alignItems="center" marginRight="20px">
        <Box
          mr="30px"
          as={colorMode === "dark" ? BsSun : BsMoon}
          size={colorMode === "dark" ? "20px" : "18px"}
          cursor="pointer"
          onClick={toggleColorMode}
        />
        <Account />
      </Flex>
    </Flex>
  );
};

export default Header;
