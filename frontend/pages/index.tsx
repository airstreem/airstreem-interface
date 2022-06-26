import type { NextPage } from "next";
import { useMoralis } from "react-moralis";
import { useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import WalletModal from "../components/WalletModal";
import NavBar from "../components/NavBar";
import Receiving from "../components/Receiving";
import Sending from "../components/Sending";

const Home: NextPage = () => {
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout,
  } = useMoralis();

  useEffect(() => {
    if (isAuthenticated) {
      // add your logic here
      console.log(user!.get("ethAddress"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  return (
    <Box
      as="main"
      w="full"
      // minH="2000px"
      // maxWidth={1100}
      alignContent={"center"}
      justifyContent={"center"}
      margin="0 auto"
      bg={isAuthenticated ? "gray.100" : "white"}
      pb={12}
    >
      {!isAuthenticated && <WalletModal />}
      {isAuthenticated && (
        <>
          <NavBar />
          <Receiving />
          <Sending />
        </>
      )}
    </Box>
  );
};

export default Home;
