import Link from "next/link";
import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { signOut, useSession } from "next-auth/client";
import { useState } from "react";
import { SunIcon } from "@chakra-ui/icons";
import Logo from "./Logo";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Logo w="100px" />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

const CloseIcon = () => {
    const buttonbackground = useColorModeValue("black", "white");
    return (
      <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
        <title>Close</title>
        <path
          fill={buttonbackground}
          d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
        />
      </svg>
    );};

const MenuIcon = () => {
    const buttonbackground = useColorModeValue("black", "white");
    return (
<Box>
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill={buttonbackground}
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
  </Box>
)};

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Box variant="filled" >
      <Link href={to}>
        <Text display="block" {...rest}>
          {children}
        </Text>
      </Link>
    </Box>
  );
};

const MenuLinks = ({ isOpen }) => {
  const [session, loading] = useSession();
  const buttonbackground = useColorModeValue("grey.100", "grey.700");
  const { toggleColorMode } = useColorMode();
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
        variant="filled"
      >
        <MenuItem to="/">Home</MenuItem>
        {session && (
          <>
            <MenuItem to="/personalMethods">Methods</MenuItem>
            <MenuItem to="/discussion">Discussion</MenuItem>
          </>
        )}
        <MenuItem to="/signin" isLast>
          {!session && (
            <>
              <Button size="sm" rounded="md">
                Sign In
              </Button>
            </>
          )}
          {session && (
            <>
              <Button size="sm" rounded="md" onClick={() => signOut()}>
                Log Out
              </Button>
            </>
          )}
        </MenuItem>
        <SunIcon
          onClick={toggleColorMode}
          variant="filled"
          color={buttonbackground}
          w={9}
          h={7}
        />
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;
