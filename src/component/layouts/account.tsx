import { Menu, MenuButton, MenuList, MenuItem, Box } from "@chakra-ui/react";
import { RiAccountCircleLine } from "react-icons/ri";
import { BiLogIn, BiUserCircle } from "react-icons/bi";

import { useAuth } from "../../context/useAuth";

const Account = () => {
  const { logout } = useAuth();
  return (
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
  );
};

export default Account;
