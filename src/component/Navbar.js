import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "2rem",
      }}
    >
      <div>
        <img src="photo/3606214_0000s_0000s_0000_Place-Your-Logo-Here-(Double-Click-to-Edit).png" />
      </div>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
          display={["block", "block", "none", "none", "none"]}
          color="#42200B"
        />
        <MenuList>
          <MenuItem>HOME</MenuItem>
          <MenuItem>MENU</MenuItem>
          <MenuItem>CONTACT US</MenuItem>
        </MenuList>
      </Menu>
      <Flex display={["none", "none", "block", "block", "block"]}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#42200B",
          }}
        >
          <p>
            <span>HOME </span>
            <span>MENU </span>
            <span>CONTACTUS </span>
          </p>
        </div>
      </Flex>
    </div>
  );
};

export default Navbar;
