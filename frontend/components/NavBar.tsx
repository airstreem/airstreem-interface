import {
  Box,
  Flex,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useMoralis } from "react-moralis";
import { BiWalletAlt } from "react-icons/bi";
import { useRouter } from "next/router";

const NavBar = () => {
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout,
  } = useMoralis();
  const router = useRouter();

  const logOut = async () => {
    await logout();
    console.log("logged out");
  };

  return (
    <Box px={4} boxShadow="md" width="full" zIndex={2} bg="white">
      <Flex
        maxWidth="1100"
        margin="0 auto"
        h={16}
        alignItems="center"
        justifyContent="space-between"
      >
        <Text
          fontWeight={"bold"}
          fontSize="xl"
          onClick={() => {
            router.push("/");
          }}
          _hover={{ cursor: "pointer" }}
        >
          airstream
        </Text>
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton
                isActive={isOpen}
                as={Button}
                colorScheme="blue"
                leftIcon={<BiWalletAlt />}
              >
                {user!.get("ethAddress").slice(0, 4)}..
                {user!.get("ethAddress").slice(-4)}
              </MenuButton>
              <MenuList>
                <MenuItem
                  onClick={logOut}
                  alignContent="center"
                  justifyContent="center"
                >
                  Log Out
                </MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
      </Flex>
    </Box>
  );
};

export default NavBar;
