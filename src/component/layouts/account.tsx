import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Stack,
  Flex,
  Text,
} from "@chakra-ui/react";
import { RiAccountCircleLine } from "react-icons/ri";
import { BiLogIn, BiUserCircle } from "react-icons/bi";

import { useAuth } from "../../context/useAuth";

const Account = () => {
  const { logout, loggedUser } = useAuth();
  return (
    <Stack direction={["row"]} spacing="10px">
      <Flex
        direction="column"
        alignItems="flex-start"
        justifyContent="flex-start"
        alignContent="flex-start"
      >
        <Text fontSize="sm">{loggedUser ? loggedUser.displayName : "unknown"}</Text>
        <Text fontSize="xs"> {loggedUser? loggedUser.email : "unknown"} </Text>
      </Flex>
      <Menu>
        <MenuButton
          as={Box}
          cursor="pointer"
          fontSize="23px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
        >
          <RiAccountCircleLine />
        </MenuButton>
        <MenuList zIndex={99}>
          <MenuItem icon={<BiUserCircle />}>Profile</MenuItem>
          <MenuItem icon={<BiLogIn />} onClick={() => logout()}>
            Logout
          </MenuItem>
        </MenuList>
      </Menu>
    </Stack>
  );
};

export default Account;
